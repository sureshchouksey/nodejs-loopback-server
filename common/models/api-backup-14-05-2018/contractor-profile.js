'use strict';
var async = require('async');
var Appaccess = require('./app-access');

module.exports = function(Contractorprofile) {

    //******* [ Contractor Login function] *******//
    Contractorprofile.contractor_login = function(contractorDataObj, cb) {

        //declaring variables
        var loginResultObj = { contractor_id: '', app_id: '', accessToken: '' }; //callback result variable
        var contractorEmailId = '';
        var appAccessCode = '';
        var contractorImei = '';
        var appId = 1;

        //check if email & access_code is not empty
        if (contractorDataObj.contractor_email != undefined || contractorDataObj.contractor_email != '' || contractorDataObj.contractor_email != null) {
            contractorEmailId = contractorDataObj.contractor_email;
        } else {
            cb(error(406, 'Contractor contractor_email is empty'), null);
        }
        if (contractorDataObj.app_access_code != undefined || contractorDataObj.app_access_code != '' || contractorDataObj.app_access_code != null) {
            appAccessCode = contractorDataObj.app_access_code;
        } else {
            cb(error(406, 'Contractor app_access_code is empty'), null);
        }
        if (contractorDataObj.contractor_imei != undefined && contractorDataObj.contractor_imei != null && contractorDataObj.contractor_imei != '') {
            contractorImei = contractorDataObj.contractor_imei;
        } else {
            cb(error(406, 'imei not found'), null);
        }
        if (contractorDataObj.app_id != undefined || contractorDataObj.app_id != '' || contractorDataObj.app_id != null) {
            appId = contractorDataObj.app_id;
        } else {
            appId = 1;
        }




        //================ [ FindOne for Contractorprofile Model ] ======== check if contrator emailId exist
        Contractorprofile.findOne({ where: { contractor_email_id: contractorEmailId, status: 1, app_id: appId } }, function(err, contractorResultObj) {

            if (!err) {
                //if Contractor data exist verify access code
                if (contractorResultObj) {

                    loginResultObj.contractor_id = contractorResultObj.contractor_id;
                    loginResultObj.contractor_name = contractorResultObj.name_of_contractor;

                    //============ [ FindOne for app_access Model ] ==== check if appAccess code matches to the contractorId
                    var appAccessModel = Contractorprofile.app.models.app_access;

                    appAccessModel.findOne({ where: { contractor_id: loginResultObj.contractor_id, access_code: appAccessCode } }, function(err, appAccessResultObj) {
                        if (!err) {

                            if (appAccessResultObj) {

                                loginResultObj.app_id = appAccessResultObj.app_id;

                                //============ [ FindOne for User Model ] ==== check if userEmail matches to the contractorEmailId
                                var UserModel = Contractorprofile.app.models.User;
                                var userEmail = contractorEmailId;
                                UserModel.findOne({ where: { email: userEmail } }, function(err, user) {

                                    if (!err) {
                                        if (user) {
                                            //generating token for contractor
                                            user.createAccessToken(1209600, function(err, accessTokenObj) {
                                                if (err) return fn(err);

                                                accessTokenObj.rememberMe = true;
                                                loginResultObj.accessToken = accessTokenObj;
                                                var accessToken = -1;
                                                var updateQuery = "UPDATE app_access SET access_code =" + accessToken + ",imei_number='" + contractorImei + "' where app_id=" + loginResultObj.app_id + " and contractor_id=" + loginResultObj.contractor_id + ";";

                                                Contractorprofile.dataSource.connector.query(updateQuery, (err, resultObj) => {});

                                                cb(null, loginResultObj);
                                            });
                                        } else {
                                            cb(error(406, "User not found"), null);
                                        }
                                    } else {
                                        cb(error(406, "Something went wrong"), null);
                                    }
                                });
                            } else {
                                cb(error(406, 'Access code no. not matched'), null);
                            }
                        } else {
                            cb(error(406, "Something went wrong"), null);
                        }
                    });
                } else {
                    cb(error(406, 'Contractor not found'), null);
                }
            } else {
                cb(error(406, 'Something went wrong'), null);
            }
        });
    }

    //******* [ Remote function for Contractor Login ] *******//
    Contractorprofile.remoteMethod('contractor_login', {
        http: { path: '/contractor_login', verb: 'POST' },
        accepts: [
            { arg: 'contractorDataObj', type: 'object', http: { source: 'body' } }
        ],
        returns: { arg: 'data', type: 'object' }
    });


    //******* [ Update Contractor function] *******//
    Contractorprofile.update_Contractor = function(contractorDataObj, cb) {

        //getting refference of affiliation model
        var ContractoraffiliationmappingModel = Contractorprofile.app.models.contractor_affiliation_mapping;
        //getting refference of specialization mapping  model
        var ContractorspecializationmappingModel = Contractorprofile.app.models.contractor_specialization_mapping;
        //getting refference of Accreditedsupplies model
        var AccreditedsuppliesModel = Contractorprofile.app.models.accredited_supplies;
        //getting refference of Accreditedsupplies mapping model
        var WorkgroupModel = Contractorprofile.app.models.work_group;
        //getting refference of Accreditedsupplies mapping model
        var EquipmentsmappingModel = Contractorprofile.app.models.equipments_mapping;
        //getting refference of subSpecizlization mapping model
        var SubSpecializationmappingModel = Contractorprofile.app.models.sub_specialization_mapping;
        //getting refference of Appdetails model
        var AppdetailsModel = Contractorprofile.app.models.app_details;

        //Declaring variables
        var dateObj = new Date();
        var currentTimeStamp = dateObj.getTime();
        var appStatus = false;
        var contractorStatus = false;
        var contractorObj = {
            contractor_id: '',
            app_id: '',
            contractor_email_id: '',
            name_of_contractor: '',
            contractor_password: '',
            contractor_photo: '',
            contractor_cover_photo: '',
            company_name: '',
            address: '',
            city_id: '',
            zip: '',
            updated_date: '',
            //status : '',
            municipality_id: '',
            education_qualification: "",
            about_me: "",
            credentials: ""
        };
        var contractor_affiliation = [];
        var contractor_specialization = [];
        var sub_specialization = [];
        var accredited_suppliers = [];
        var work_group = [];
        var contractor_equipment = [];
        var contractorResult = {
            "contractor_details": {},
            "contractor_affiliation": [],
            "contractor_specialization": [],
            "sub_specialization": [],
            "accredited_suppliers": [],
            "contractor_equipments": [],
            "work_group": []
        };
        var contractor_affiliationResultArr = [];
        //checking contractorObject data
        (contractorDataObj.contractor_id != undefined && contractorDataObj.contractor_id != null && contractorDataObj.contractor_id != '') ? contractorObj.contractor_id = contractorDataObj.contractor_id: cb('contractor id is empty', null);
        (contractorDataObj.app_id != undefined && contractorDataObj.app_id != null && contractorDataObj.app_id != '') ? contractorObj.app_id = contractorDataObj.app_id: cb('contractor appId is empty', null);
        (contractorDataObj.contractor_email_id != undefined && contractorDataObj.contractor_email_id != null && contractorDataObj.contractor_email_id != '') ? contractorObj.contractor_email_id = contractorDataObj.contractor_email_id: cb('contractor emailId is empty', null);
        (contractorDataObj.name_of_contractor != undefined && contractorDataObj.name_of_contractor != null && contractorDataObj.name_of_contractor != '') ? contractorObj.name_of_contractor = contractorDataObj.name_of_contractor: '';
        (contractorDataObj.contractor_photo != undefined && contractorDataObj.contractor_photo != null && contractorDataObj.contractor_photo != '') ? contractorObj.contractor_photo = contractorDataObj.contractor_photo: '';
        (contractorDataObj.contractor_cover_photo != undefined && contractorDataObj.contractor_cover_photo != null && contractorDataObj.contractor_cover_photo != '') ? contractorObj.contractor_cover_photo = contractorDataObj.contractor_cover_photo: '';
        (contractorDataObj.company_name != undefined && contractorDataObj.company_name != null && contractorDataObj.company_name != '') ? contractorObj.company_name = contractorDataObj.company_name: '';
        (contractorDataObj.affiliation != undefined && contractorDataObj.affiliation != null && contractorDataObj.affiliation != '') ? contractor_affiliation = contractorDataObj.affiliation: '';
        (contractorDataObj.specialization != undefined && contractorDataObj.specialization != []) ? contractor_specialization = contractorDataObj.specialization: contractor_specialization = [];
        (contractorDataObj.sub_specialization != undefined && contractorDataObj.sub_specialization != []) ? sub_specialization = contractorDataObj.sub_specialization: sub_specialization = [];

        (contractorDataObj.accredited_suppliers != undefined && contractorDataObj.accredited_suppliers != null && contractorDataObj.accredited_suppliers != '') ? accredited_suppliers = contractorDataObj.accredited_suppliers: '';
        (contractorDataObj.work_group != undefined && contractorDataObj.work_group != null && contractorDataObj.work_group != '') ? work_group = contractorDataObj.work_group: '';
        (contractorDataObj.contractor_equipment != undefined && contractorDataObj.contractor_equipment != null && contractorDataObj.contractor_equipment != '') ? contractor_equipment = contractorDataObj.contractor_equipment: '';
        (contractorDataObj.address != undefined && contractorDataObj.address != null && contractorDataObj.address != '') ? contractorObj.address = contractorDataObj.address: ''; //cb('contractor address is empty' , null);
        (contractorDataObj.city_id != undefined && contractorDataObj.city_id != null && contractorDataObj.city_id != '') ? contractorObj.city_id = contractorDataObj.city_id: ''; //cb('contractor cityId is empty' , null);
        (contractorDataObj.zip != undefined && contractorDataObj.zip != null && contractorDataObj.zip != '') ? contractorObj.zip = contractorDataObj.zip: ''; //cb('contractor zip is empty' , null);
        (contractorDataObj.updated_date != undefined && contractorDataObj.updated_date != null && contractorDataObj.updated_date != '') ? contractorObj.updated_date = contractorDataObj.updated_date: ''; //cb('contractor updated_date is empty' , null);
        //(contractorDataObj.status != undefined && contractorDataObj.status != null && contractorDataObj.status != '')? contractorObj.status = contractorDataObj.status : '';
        (contractorDataObj.status != undefined && contractorDataObj.status != null && contractorDataObj.status != '') ? '' : '';
        (contractorDataObj.municipality_id != undefined && contractorDataObj.municipality_id != null && contractorDataObj.municipality_id != '') ? contractorObj.municipality_id = contractorDataObj.municipality_id: '';
        (contractorDataObj.education_qualification != undefined && contractorDataObj.education_qualification != null && contractorDataObj.education_qualification != '') ? contractorObj.education_qualification = contractorDataObj.education_qualification: "";
        (contractorDataObj.about_me != undefined && contractorDataObj.about_me != null && contractorDataObj.about_me != '') ? contractorObj.about_me = contractorDataObj.about_me: "";
        (contractorDataObj.credentials != undefined && contractorDataObj.credentials != null && contractorDataObj.credentials != '') ? contractorObj.credentials = contractorDataObj.credentials: "";

        //======================[Checking if Contractor is active or not]=============
        Contractorprofile.findOne({ where: { contractor_id: contractorObj.contractor_id, status: 1 } }, function(err, contractorStatusResult) {
            if (err) {
                cb(err, '');
            } else {

                if (contractorStatusResult != undefined && contractorStatusResult != null && contractorStatusResult != '') {
                    contractorStatus = true;

                    //if Contractor is active ----------------------------------------------------
                    if (contractorStatus) {

                        //======================[Checking if app is active or not]=============
                        AppdetailsModel.findOne({ where: { app_id: contractorObj.app_id, status: 1 } }, function(err, appResult) {
                            if (err) {
                                cb(err, '');
                            } else {

                                if (appResult != undefined && appResult != null && appResult != '') {
                                    appStatus = true;

                                    //if app is active ----------------------------------------------------
                                    if (appStatus) {
                                        //============ [ Upsert for contractor Model ] ============================
                                        Contractorprofile.upsert(contractorObj, function(err, contractorUpsertResult) {

                                            //if data is inserted successfully
                                            if (!err) {
                                                //getting result of contractor upsert in contractorResult object
                                                contractorResult.contractor_details = contractorUpsertResult;

                                                let asyncTasks = []; //array used to push functions and execute them in async.parallel

                                                if (contractor_affiliation.length != 0) {
                                                    asyncTasks.push((callback) => {
                                                        var deleteQuery = "delete from contractor_affiliation_mapping where contractor_id = " + contractorObj.contractor_id;

                                                        Contractorprofile.dataSource.connector.query(deleteQuery, (err, resultObj) => {

                                                            if (!err) {
                                                                //upserting contractor affiliation into affilition mapping model
                                                                async.each(contractor_affiliation, function(affiliation, affiliationCallback) {
                                                                    //set contractor affiliation other certificate name to empty if not set.
                                                                    (affiliation.others != '' && affiliation.others != null && affiliation.others != undefined) ? '' : affiliation.others = '';
                                                                    //check row ID for update . If id exits then it is a update request
                                                                    (affiliation.id != undefined && affiliation.id != null && affiliation.id != '') ? '' : delete affiliation.id;

                                                                    //============ [ Upsert for affiliation mapping Model ] =====================
                                                                    ContractoraffiliationmappingModel.upsert(affiliation, function(err, upserResult) {
                                                                        if (!err) {

                                                                            contractorResult.contractor_affiliation.push(upserResult);
                                                                            affiliationCallback();
                                                                        } else {

                                                                            // cb("affiliation upsert error"+err,'');
                                                                            affiliationCallback();
                                                                        }
                                                                    });



                                                                }, (endLoop) => {
                                                                    callback();
                                                                });
                                                            } else {
                                                                affiliationCallback();
                                                            }
                                                        });

                                                    });
                                                }

                                                if (contractor_specialization.length != 0) {
                                                    asyncTasks.push((callback) => {

                                                        var deleteQuery = "delete from contractor_specialization_mapping where contractor_id = " + contractorObj.contractor_id;

                                                        Contractorprofile.dataSource.connector.query(deleteQuery, (err, resultObj) => {

                                                            if (!err) {
                                                                //upserting contractor specification into specification mapping model
                                                                async.each(contractor_specialization, function(specialization, specializationCallback) {
                                                                    //check row ID for update . If id exits then it is a update request
                                                                    (specialization.id != undefined && specialization.id != null && specialization.id != '') ? '' : delete specialization.id;

                                                                    //============ [ Upsert for specialization mapping Model ] =====================
                                                                    ContractorspecializationmappingModel.upsert(specialization, function(err, upserResult) {
                                                                        if (!err) {

                                                                            contractorResult.contractor_specialization.push(upserResult);
                                                                            specializationCallback();
                                                                        } else {

                                                                            // cb("specialization upsert error"+err,'');
                                                                            specializationCallback();
                                                                        }
                                                                    });

                                                                }, (endLoop) => {
                                                                    callback();
                                                                });
                                                            } else {
                                                                callback();
                                                            }
                                                        });
                                                    });
                                                }

                                                if (sub_specialization.length != 0) {
                                                    asyncTasks.push((callback) => {

                                                        var deleteQuery = "delete from sub_specialization_mapping where contractor_id = " + contractorObj.contractor_id;

                                                        Contractorprofile.dataSource.connector.query(deleteQuery, (err, resultObj) => {

                                                            if (!err) {
                                                                //upserting contractor specification into specification mapping model
                                                                async.each(sub_specialization, function(specialization, specializationMappingCallback) {
                                                                    //check row ID for update . If id exits then it is a update request
                                                                    (specialization.id != undefined && specialization.id != null && specialization.id != '') ? '' : delete specialization.id;

                                                                    //============ [ Upsert for specialization mapping Model ] =====================
                                                                    SubSpecializationmappingModel.upsert(specialization, function(err, upserResult) {
                                                                        if (!err) {

                                                                            contractorResult.sub_specialization.push(upserResult);
                                                                            specializationMappingCallback();
                                                                        } else {

                                                                            // cb("specialization upsert error"+err,'');
                                                                            specializationMappingCallback();
                                                                        }
                                                                    });

                                                                }, (endLoop) => {
                                                                    callback();
                                                                });
                                                            } else {
                                                                callback();
                                                            }
                                                        });
                                                    });
                                                }

                                                if (accredited_suppliers.length != 0) {
                                                    asyncTasks.push((callback) => {
                                                        //upserting contractor accredited_suppliers into accredited_suppliers  model
                                                        async.each(accredited_suppliers, function(suppliers, suppliersCallback) {
                                                            //check row ID for update . If id exits then it is a update request
                                                            (suppliers.id != undefined && suppliers.id != null && suppliers.id != '') ? '' : delete suppliers.id;

                                                            //============ [ Upsert for accredited_suppliers mapping Model ] =====================
                                                            AccreditedsuppliesModel.upsert(suppliers, function(err, upserResult) {
                                                                if (!err) {

                                                                    contractorResult.accredited_suppliers.push(upserResult);
                                                                    suppliersCallback();
                                                                } else {

                                                                    //cb("suppliers upsert error"+err,'');
                                                                    suppliersCallback();
                                                                }
                                                            });

                                                        }, (endLoop) => {
                                                            callback();
                                                        });

                                                    });
                                                }

                                                if (contractor_equipment.length != 0) {

                                                    asyncTasks.push((callback) => {
                                                        var deleteQuery = "delete from equipments_mapping where contractor_id = " + contractorObj.contractor_id;

                                                        Contractorprofile.dataSource.connector.query(deleteQuery, (err, resultObj) => {

                                                            if (!err) {

                                                                async.each(contractor_equipment, function(equipments, equipmentsCallback) {

                                                                    //check row ID for update . If id exits then it is a update request
                                                                    (equipments.id != undefined && equipments.id != null && equipments.id != '') ? '' : delete equipments.id;


                                                                    //============ [ Upsert for contractor_equipment mapping Model ] =====================
                                                                    EquipmentsmappingModel.upsert(equipments, function(err, upserResult) {

                                                                        if (!err) {

                                                                            contractorResult.contractor_equipments.push(upserResult);

                                                                            equipmentsCallback();
                                                                        } else {

                                                                            // cb("equipments upsert error"+err,'');
                                                                            equipmentsCallback();

                                                                        }
                                                                    });

                                                                }, (endLoop) => {
                                                                    callback();
                                                                });
                                                            } else {
                                                                callback();
                                                            }
                                                        });

                                                    });

                                                }
                                                //console.log("WorkGroupLength",work_group.length);
                                                if (work_group.length != 0) {
                                                    asyncTasks.push((callback) => {
                                                        var deleteQuery = "delete from work_group where contractor_id = " + contractorObj.contractor_id;

                                                        Contractorprofile.dataSource.connector.query(deleteQuery, (err, resultObj) => {
                                                            if (!err) {


                                                                //console.log("ahjahdjah");
                                                                async.each(work_group, function(projectTeam, projectTeamCallback) {
                                                                    //check row ID for update . If id exits then it is a update request
                                                                    (projectTeam.id != undefined && projectTeam.id != null && projectTeam.id != '') ? '' : delete projectTeam.id;

                                                                    //============ [ Upsert for contractor_projectTeam in workgroup mapping Model ] =====================
                                                                    WorkgroupModel.upsert(projectTeam, function(err, upserResult) {
                                                                        if (!err) {

                                                                            contractorResult.work_group.push(upserResult);
                                                                            projectTeamCallback();
                                                                        } else {

                                                                            // cb("project_team_upsert upsert error"+err,'');
                                                                            projectTeamCallback();
                                                                        }
                                                                    });

                                                                }, (endLoop) => {
                                                                    callback();
                                                                });



                                                            } else {
                                                                callback();
                                                            }
                                                        });
                                                    });
                                                }



                                                //execute the functioins inside asyncTasks array in parallelLimit of 1
                                                async.parallelLimit(asyncTasks, 1, function(err, result) {


                                                    cb("", contractorResult); //Remote method call back
                                                });

                                            }
                                            //if data is not inserted successfully
                                            else {
                                                cb(err, "");
                                            }
                                        });
                                    } else {
                                        cb('app Access is restricted ', '');
                                    }
                                } else {
                                    cb('app is restricted', '');
                                }
                            }

                        });
                    } else {
                        cb('contractor is restricted', '');
                    }
                } else {
                    cb('Contractor Status not found', '');
                }
            }
        });


    }



    //******* [ Remote function to Add/Update Contractor ] *******//
    Contractorprofile.remoteMethod('update_Contractor', {
        http: { path: '/update_Contractor', verb: 'POST' },
        accepts: [
            { arg: 'contractorDataObj', type: 'object', http: { source: 'body' } }
        ],
        returns: { arg: 'data', type: 'object' }
    });

    //******* [ Update Contractor function] *******//
    Contractorprofile.contractor_dwnSync = function(contractorId, appId, cb) {

        //getting refference of affiliation model
        var ContractoraffiliationmappingModel = Contractorprofile.app.models.contractor_affiliation_mapping;
        //getting refference of specialization mapping  model
        var ContractorspecializationmappingModel = Contractorprofile.app.models.contractor_specialization_mapping;
        //getting refference of Accreditedsupplies mapping model
        var WorkgroupModel = Contractorprofile.app.models.work_group;
        //getting refference of Accreditedsupplies mapping model
        var EquipmentsmappingModel = Contractorprofile.app.models.equipments_mapping;
        //getting refference of Appdetails model
        var AppdetailsModel = Contractorprofile.app.models.app_details;
        //getting refference of subSpecizlization mapping model
        var SubSpecializationmappingModel = Contractorprofile.app.models.sub_specialization_mapping;

        var appStatus = false;
        var contractorStatus = false;
        var contractorData = {
            contractorDetails: {},
            affiliations: [],
            equipment: [],
            specialization: [],
            sub_specialization: [],
            workGroup: []
        }

        //======================[Checking if Contractor is active or not]=============
        Contractorprofile.findOne({ where: { contractorId: contractorId, status: 1 } }, function(err, contractorStatusResult) {
            if (err) {
                cb("something went wrong", '');
            } else {

                if (contractorStatusResult != undefined && contractorStatusResult != null && contractorStatusResult != '') {
                    contractorStatus = true;

                    //if Contractor is active ----------------------------------------------------
                    if (contractorStatus) {

                        //======================[Checking if app is active or not]=============
                        AppdetailsModel.findOne({ where: { app_id: appId, status: 1 } }, function(err, appResult) {
                            if (err) {
                                cb(err, '');
                            } else {
                                if (appResult != undefined && appResult != null && appResult != '') {
                                    appStatus = true;

                                    //if app is active ----------------------------------------------------
                                    if (appStatus) {

                                        ////======================[Getting Contractor Details]=============
                                        Contractorprofile.findOne({ where: { contractor_id: contractorId } }, function(err, contractorObj) {
                                            if (!err) {

                                                //contractor obj 
                                                contractorData.contractorDetails = contractorObj;

                                                let asyncTasks = []; //array used to push functions and execute them in async.parallel

                                                //======================[Getting Contractor Affiliations ]=============
                                                asyncTasks.push((callback) => {

                                                    ContractoraffiliationmappingModel.find({ where: { contractor_id: contractorId } }, function(err, affiliationData) {
                                                        if (!err) {
                                                            contractorData.affiliations = affiliationData;
                                                            callback();
                                                        } else {
                                                            callback();
                                                        }
                                                    });
                                                });

                                                //======================[Getting Contractor Specialization ]=============
                                                asyncTasks.push((callback) => {

                                                    ContractorspecializationmappingModel.find({ where: { contractor_id: contractorId } }, function(err, specializationData) {
                                                        if (!err) {
                                                            contractorData.specialization = specializationData;
                                                            callback();
                                                        } else {
                                                            callback();
                                                        }
                                                    });
                                                });

                                                //======================[Getting Contractor SubSpecialization ]=============
                                                asyncTasks.push((callback) => {

                                                    SubSpecializationmappingModel.find({ where: { contractor_id: contractorId } }, function(err, subSpecializationData) {
                                                        if (!err) {
                                                            contractorData.sub_specialization = subSpecializationData;
                                                            callback();
                                                        } else {
                                                            callback();
                                                        }
                                                    });
                                                });

                                                asyncTasks.push((callback) => {

                                                    EquipmentsmappingModel.find({ where: { contractor_id: contractorId } }, function(err, equipmentData) {
                                                        if (!err) {
                                                            contractorData.equipment = equipmentData;
                                                            callback();
                                                        } else {
                                                            callback();
                                                        }
                                                    });
                                                });


                                                //======================[Getting Contractor WorkGroup ]=============
                                                asyncTasks.push((callback) => {

                                                    WorkgroupModel.find({ where: { contractor_id: contractorId, status: 1 } }, function(err, workGroupData) {
                                                        if (!err) {
                                                            contractorData.workGroup = workGroupData;
                                                            callback();
                                                        } else {
                                                            callback();
                                                        }
                                                    });
                                                });

                                                //execute the functioins inside asyncTasks array in parallelLimit of 1
                                                async.parallelLimit(asyncTasks, 1, function(err, result) {

                                                    if (!err) {
                                                        cb("", contractorData); //Remote method call back
                                                    } else {
                                                        cb("Something went wrong", null); //Remote method call back
                                                    }

                                                });


                                            } else {
                                                cb("something went wrong", null);
                                            }
                                        });
                                    } else {
                                        cb('app is restricted', '');
                                    }
                                } else {
                                    cb('app is restricted', '');
                                }
                            }
                        });

                    } else {
                        cb("contractor is restricted", null);
                    }
                } else {
                    cb("contractor is restricted", null);
                }
            }
        });
    }

    //******* [ Remote function to down sync Contractor Data] *******//
    Contractorprofile.remoteMethod('contractor_dwnSync', {
        http: { path: '/contractor_dwnSync', verb: 'POST' },
        accepts: [
            { arg: 'contractorId', type: 'number' },
            { arg: 'appId', type: 'number' }
        ],
        returns: { arg: 'data', type: 'object' }
    });

    //******* [ Add Contractor function] *******//
    Contractorprofile.add_contractor = function(contractorObj, cb) {
        //Refference of User model
        var UserModel = Contractorprofile.app.models.User;
        //Refference of Appdetails model
        var AppdetailsModel = Contractorprofile.app.models.app_details;

        var dateObj = new Date();
        var currentTimeStamp = dateObj.getTime();

        //decalring variables
        var contractorObjData = {
            name_of_contractor: '',
            contractor_email_id: '',
            contractor_photo: '',
            app_id: [],
            created_date: currentTimeStamp,
        };
        var addContractorResult = {
            user: '',
            contractor: []
        };

        (contractorObj.name_of_contractor != undefined && contractorObj.name_of_contractor != null && contractorObj.name_of_contractor != '') ? contractorObjData.name_of_contractor = contractorObj.name_of_contractor: cb(error(406, 'name_of_contractor not found'), null);
        (contractorObj.contractor_email_id != undefined && contractorObj.contractor_email_id != null && contractorObj.contractor_email_id != '') ? contractorObjData.contractor_email_id = contractorObj.contractor_email_id: cb(error(406, 'contractor_email_id not found'), null);
        (contractorObj.app_id != undefined && contractorObj.app_id != null && contractorObj.app_id != '') ? contractorObjData.app_id = contractorObj.app_id: cb(error(406, "app_id not found"), null);
        (contractorObj.contractor_photo != undefined && contractorObj.contractor_photo != null && contractorObj.contractor_photo != '') ? contractorObjData.contractor_photo = contractorObj.contractor_photo: '';

        UserModel.findOne({ where: { email: contractorObjData.contractor_email_id } }, function(err, userResult) {
            if (err) {
                cb(err, '');
            } else {
                //if is user exist already
                if (userResult != null && userResult != undefined && userResult != '') {

                    cb(error(406, "user result already exist"), null);
                } else {
                    // var passwordData;
                    var passwordData = createPassword();



                    var userData = {
                        email: contractorObjData.contractor_email_id,
                        username: contractorObjData.name_of_contractor,
                        password: passwordData
                    };

                    UserModel.upsert(userData, function(err, usrUpsertResult) {
                        if (!err) {
                            addContractorResult.user = usrUpsertResult;
                            //addig a contractor;
                            if (contractorObjData.app_id) {
                                let asyncTasks = []; //array used to push functions and execute them in async.parallel

                                asyncTasks.push((callback) => {
                                    async.each(contractorObjData.app_id, function(appId, appIdCallBack) {
                                        var contractorAddObj = {
                                            name_of_contractor: contractorObjData.name_of_contractor,
                                            contractor_email_id: contractorObjData.contractor_email_id,
                                            contractor_photo: contractorObjData.contractor_photo,
                                            app_id: appId,
                                            status: 1,
                                            created_date: currentTimeStamp,
                                        };

                                        Contractorprofile.upsert(contractorAddObj, function(err, contractorUpsertResult) {
                                            if (!err) {
                                                var appAccessObj = {
                                                    contractor_id: contractorUpsertResult.contractor_id,
                                                    contractor_email_id: contractorObjData.contractor_email_id,
                                                    app_id: contractorUpsertResult.app_id
                                                };

                                                create_access_Code(appAccessObj).then((result) => {
                                                    addContractorResult.contractor.push(contractorUpsertResult);
                                                    appIdCallBack();
                                                }, (err) => {
                                                    appIdCallBack();
                                                });

                                            } else {
                                                appIdCallBack();
                                            }
                                        });
                                    }, (endloop) => {
                                        callback();
                                    });
                                });

                                //execute the functioins inside asyncTasks array in parallelLimit of 1
                                async.parallelLimit(asyncTasks, 1, function(err, result) {
                                    if (!err) {

                                        cb(null, addContractorResult); //Remote method call back
                                    } else {
                                        cb(error(406, "somthing went wrong in async tasks"), null);
                                    }
                                });


                            } else {
                                cb(error(406, "something went wrong"), null);
                            }

                        } else {
                            cb(err, null);
                        }
                    });
                }

            }
        });
    }

    //******* [ Remote function to Add Contractor] *******//
    Contractorprofile.remoteMethod('add_contractor', {
        http: { path: '/add_contractor', verb: 'POST' },
        accepts: [
            { arg: 'contractorObj', type: 'object', http: { source: 'body' } }
        ],
        returns: { arg: 'data', type: 'object' }
    });

    Contractorprofile.edit_contractor = function(contractorObj, cb) {

        //Refference of User model
        var UserModel = Contractorprofile.app.models.User;
        //Refference of Appdetails model
        var AppdetailsModel = Contractorprofile.app.models.app_details;

        var dateObj = new Date();
        var currentTimeStamp = dateObj.getTime();

        //decalring variables
        var contractorObjData = {
            name_of_contractor: '',
            contractor_email_id: '',
            contractor_photo: '',
            app_id: [],
            created_date: currentTimeStamp,
        };
        var addContractorResult = {
            contractor: '',
            appDisabled: [],
            appEnabled: [],
            appAdded: []
        };

        (contractorObj.name_of_contractor != undefined && contractorObj.name_of_contractor != null && contractorObj.name_of_contractor != '') ? contractorObjData.name_of_contractor = contractorObj.name_of_contractor: cb(error(406, 'name_of_contractor not found'), null);
        (contractorObj.contractor_email_id != undefined && contractorObj.contractor_email_id != null && contractorObj.contractor_email_id != '') ? contractorObjData.contractor_email_id = contractorObj.contractor_email_id: cb(error(406, 'contractor_email_id not found'), null);
        (contractorObj.app_id != undefined && contractorObj.app_id != null && contractorObj.app_id != '') ? contractorObjData.app_id = contractorObj.app_id: cb(error(406, "app_id not found"), null);
        (contractorObj.contractor_photo != undefined && contractorObj.contractor_photo != null && contractorObj.contractor_photo != '') ? contractorObjData.contractor_photo = contractorObj.contractor_photo: '';

        UserModel.findOne({ where: { email: contractorObjData.contractor_email_id } }, function(err, userResult) {
            if (err) {
                cb(err, '');
            } else {
                addContractorResult.contractor = userResult;
                //if is user exist already
                if (userResult != null && userResult != undefined && userResult != '') {

                    let asyncTasks = []; //array used to push functions and execute them in async.parallel

                    var appIdArr = [];
                    var findContractorAppid = "select app_id from contractor_profile where contractor_email_id = '" + contractorObj.contractor_email_id + "'";

                    Contractorprofile.dataSource.connector.query(findContractorAppid, (err, result) => {
                        if (!err) {
                            for (const key in result) {
                                appIdArr.push(result[key].app_id);
                            }


                            Array.prototype.diff = function(a) {
                                return this.filter(function(i) {
                                    return a.indexOf(i) === -1;
                                });
                            };

                            Array.prototype.match = function(a) {
                                return this.filter(function(i) {
                                    return a.indexOf(i) != -1;
                                });
                            };

                            var diffrentAppids = appIdArr.diff(contractorObjData.app_id);

                            //disabling the apps for user included
                            asyncTasks.push((callback) => {

                                async.each(diffrentAppids, function(app, appIdCallBack) {

                                    var disableUserAppQuery = "update contractor_profile set status = 0 where app_id = " + app + " and contractor_email_id = '" + contractorObjData.contractor_email_id + "'";
                                    Contractorprofile.dataSource.connector.query(disableUserAppQuery, (err, result) => {
                                        if (!err) {
                                            addContractorResult.appDisabled.push({ "appDisabled": app });
                                            appIdCallBack();
                                        } else {
                                            appIdCallBack();
                                        }
                                    });

                                }, (endloop) => {
                                    callback();
                                });
                            });

                            var appIdMatch = appIdArr.match(contractorObjData.app_id);

                            //enable the apps for user included
                            asyncTasks.push((callback) => {

                                async.each(appIdMatch, function(app, appIdCallBack) {

                                    var disableUserAppQuery = "update contractor_profile set status = 1 where app_id = " + app + " and contractor_email_id = '" + contractorObjData.contractor_email_id + "'";
                                    Contractorprofile.dataSource.connector.query(disableUserAppQuery, (err, result) => {
                                        if (!err) {
                                            addContractorResult.appEnabled.push({ "appEnabled": app });
                                            appIdCallBack();
                                        } else {
                                            appIdCallBack();
                                        }
                                    });

                                }, (endloop) => {
                                    callback();
                                });
                            });

                            var appIdToEnable = (contractorObjData.app_id).diff(appIdArr);

                            //disabling the apps for user included
                            asyncTasks.push((callback) => {
                                async.each(appIdToEnable, function(appId, appIdCallBack) {

                                    var contractorAddObj = {
                                        name_of_contractor: contractorObjData.name_of_contractor,
                                        contractor_email_id: contractorObjData.contractor_email_id,
                                        contractor_photo: contractorObjData.contractor_photo,
                                        app_id: appId,
                                        status: 1,
                                        created_date: currentTimeStamp,
                                    };

                                    Contractorprofile.upsert(contractorAddObj, function(err, contractorUpsertResult) {
                                        if (!err) {
                                            var appAccessObj = {
                                                contractor_id: contractorUpsertResult.contractor_id,
                                                contractor_email_id: contractorObjData.contractor_email_id,
                                                app_id: contractorUpsertResult.app_id
                                            };

                                            create_access_Code(appAccessObj).then((result) => {
                                                addContractorResult.appAdded.push({ "appAdded": contractorUpsertResult.app_id });
                                                appIdCallBack();
                                            }, (err) => {
                                                appIdCallBack();
                                            });

                                        } else {
                                            appIdCallBack();
                                        }
                                    });

                                }, (endloop) => {
                                    callback();
                                });
                            });

                            //execute the functioins inside asyncTasks array in parallelLimit of 1
                            async.parallelLimit(asyncTasks, 1, function(err, result) {
                                if (!err) {

                                    cb(null, addContractorResult); //Remote method call back
                                } else {
                                    cb(error(406, "somthing went wrong in async tasks"), null);
                                }
                            });


                        } else {
                            cb(error(406, "somthing went wrong in getting app id"), null);
                        }
                    });






                } else {
                    cb(error(406, "user does not exist"), null);
                }
            }
        });

    }

    //******* [ Remote function to Add Contractor] *******//
    Contractorprofile.remoteMethod('edit_contractor', {
        http: { path: '/edit_contractor', verb: 'POST' },
        accepts: [
            { arg: 'contractorObj', type: 'object', http: { source: 'body' } }
        ],
        returns: { arg: 'data', type: 'object' }
    });


    // Contractorprofile.get_contractor = function(contractorObj, cb) {
    //     //Refference of User model
    //     var UserModel = Contractorprofile.app.models.User;
    //     //Refference of Appdetails model
    //     var AppdetailsModel = Contractorprofile.app.models.app_details;

    //     var contractorDataObj = {
    //         name_of_contractor: '',
    //         contractor_email_id: '',
    //         status: 0
    //     }

    //     (contractorObj.name_of_contractor != '' && contractorObj.name_of_contractor != undefined && contractorObj.name_of_contractor != null) ? contractorDataObj.name_of_contractor = contractorObj.name_of_contractor: cb(error(406, "Contractor name does not exist"), null);
    //     (contractorObj.status != '' && contractorObj.status != undefined && contractorObj.status != null)



    // }

    // //******* [ Remote function to Get Contractor] *******//
    // Contractorprofile.remoteMethod('get_contractor', {
    //     http: { path: '/get_contractor', verb: 'POST' },
    //     accepts: [
    //         { arg: 'contractorObj', type: 'object', http: { source: 'body' } }
    //     ],
    //     returns: { arg: 'data', type: 'object' }
    // });




    //creating password for user
    function createPassword() {
        var password = "1234";
        return password;
    }

    //creating error msgs
    function error(code, data) {
        var err = new Error(data);
        err.statusCode = code;
        return err
    }

    //Generate random number for access code
    function create_access_Code(contractorDataObj) {
        return new Promise((resolve, reject) => {
            var appAccessDataObj = {
                access_code: '',
                contractor_id: '',
                app_id: ''
            }

            var responseData = { err: '', data: '' };
            var accessCode = Math.floor(1000 + Math.random() * 9000); //genrate random number as a access code

            //initializing newly generated access code in appAccess Data object
            appAccessDataObj.access_code = accessCode;
            appAccessDataObj.contractor_id = contractorDataObj.contractor_id;
            appAccessDataObj.app_id = contractorDataObj.app_id;
            var appName;

            //Query to get app name from app id
            var appNameQuery = "SELECT app_name FROM app_details where app_id = " + appAccessDataObj.app_id;
            Contractorprofile.dataSource.connector.query(appNameQuery, (err, result) => {
                if (!err) {
                    appName = result[0].app_name;
                } else {
                    reject(err);
                }
            });

            //update newly generated access code in table

            /*var upsertQuery = "MERGE app_access AS Target  USING (SELECT contractor_id, app_id FROM app_access where contractor_id ="+contractorDataObj.contractor_id+"and app_id="+contractorDataObj.app_id+") AS Source ON (Target.contractor_id = Source.contractor_id AND Target.app_id = Source.app_id)  WHEN MATCHED THEN UPDATE SET Target.access_code ="+accessCode+" WHEN NOT MATCHED BY TARGET THEN INSERT (app_id,contractor_id,access_code) VALUES ("+contractorDataObj.app_id+","+contractorDataObj.contractor_id+","+accessCode+");";*/
            var upsertQuery = "INSERT INTO app_access (app_id,contractor_id,access_code,created_date,status) VALUES (" + contractorDataObj.app_id + "," + contractorDataObj.contractor_id + "," + accessCode + "," + new Date().getTime() + "," + 1 + ")";

            Contractorprofile.dataSource.connector.query(upsertQuery, (err, resultObj) => {
                if (!err) {


                    Contractorprofile.app.models.Email.send({
                        to: contractorDataObj.contractor_email_id,
                        from: 'no-reply@gmail.com',
                        subject: 'Your one time password!',
                        text: 'my text',
                        html: "<p>Hi,<br /><br /><br />Please use the below one time password for " + appName + " app to login:<br /><br /><br />" + accessCode + "<br /><br /><br />Once you use this option, don’t forget to set your pattern in the app.<br /><br /><br />Thanks,<br>Profolio App Team</p>"
                    }, function(err, mail) {

                        if (!err) {

                            resolve("Mail send");

                        } else {

                            reject('Mail not send');

                        }

                    });

                } else {
                    console.log("Error", err);
                    reject('Something went wrong');

                }
            });

        });
    }

};