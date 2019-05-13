'use strict';
var async = require('async');


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
        Contractorprofile.findOne({ where: { contractor_email_id: contractorEmailId, status: 1 } }, function(err, contractorResultObj) {

            if (!err) {
                //if Contractor data exist verify access code
                if (contractorResultObj) {

                    loginResultObj.contractor_id = contractorResultObj.contractor_id;
                    loginResultObj.contractor_name = contractorResultObj.name_of_contractor;

                    //============ [ FindOne for app_access Model ] ==== check if appAccess code matches to the contractorId
                    var appAccessModel = Contractorprofile.app.models.app_access;

                    appAccessModel.findOne({ where: { contractor_id: loginResultObj.contractor_id, app_id: appId, access_code: appAccessCode } }, function(err, appAccessResultObj) {
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
                                            var ttl = 1209600;
                                            //var ttl = 60;
                                            user.createAccessToken(ttl, function(err, accessTokenObj) {
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
            //contractor_photo: '',
            //contractor_cover_photo: '',
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
        //(contractorDataObj.contractor_photo != undefined && contractorDataObj.contractor_photo != null && contractorDataObj.contractor_photo != '') ? contractorObj.contractor_photo = contractorDataObj.contractor_photo: '';
        //(contractorDataObj.contractor_cover_photo != undefined && contractorDataObj.contractor_cover_photo != null && contractorDataObj.contractor_cover_photo != '') ? contractorObj.contractor_cover_photo = contractorDataObj.contractor_cover_photo: '';
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



    //******* [ Remote function to Update Contractor ] *******//
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
            status: 1,
            created_date: currentTimeStamp,
        };
        var addContractorResult = {
            user: '',
            contractor: [],
            addedApp: []
        };

        (contractorObj.name_of_contractor != undefined && contractorObj.name_of_contractor != null && contractorObj.name_of_contractor != '') ? contractorObjData.name_of_contractor = contractorObj.name_of_contractor: cb(error(406, 'name_of_contractor not found'), null);
        (contractorObj.contractor_email_id != undefined && contractorObj.contractor_email_id != null && contractorObj.contractor_email_id != '') ? contractorObjData.contractor_email_id = contractorObj.contractor_email_id: cb(error(406, 'contractor_email_id not found'), null);
        (contractorObj.app_id != undefined && contractorObj.app_id != null && contractorObjData.app_id && contractorObj.app_id.length > 0) ? contractorObjData.app_id = contractorObj.app_id: [];
        (contractorObj.contractor_photo != undefined && contractorObj.contractor_photo != null && contractorObj.contractor_photo != '') ? contractorObjData.contractor_photo = contractorObj.contractor_photo: '';
        if (contractorObj.status != undefined && contractorObj.status != null && contractorObj.status != '') {
            if (contractorObj.status == 'Active') {
                contractorObjData.status = 1;
            } else {
                contractorObjData.status = 0;
            }
        } else {
            contractorObjData.status = 1;
        }

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
                        username: contractorObjData.contractor_email_id,
                        realm: contractorObjData.name_of_contractor,
                        password: passwordData
                    };

                    UserModel.upsert(userData, function(err, usrUpsertResult) {
                        if (!err) {
                            addContractorResult.user = usrUpsertResult;
                            //addig a contractor;

                            let asyncTasks = []; //array used to push functions and execute them in async.parallel

                            //new code
                            var contractorAddObj = {
                                name_of_contractor: contractorObjData.name_of_contractor,
                                contractor_email_id: contractorObjData.contractor_email_id,
                                contractor_photo: contractorObjData.contractor_photo,
                                //app_id: appId,
                                app_id: JSON.stringify(contractorObjData.app_id),
                                status: contractorObjData.status,
                                created_date: currentTimeStamp,
                            };
                            //console.log("contractorAddObj :", JSON.stringify(contractorAddObj));
                            Contractorprofile.upsert(contractorAddObj, function(err, contractorUpsertResult) {

                                if (!err) {

                                    addContractorResult.contractor.push(contractorUpsertResult);

                                    asyncTasks.push((callback) => {
                                        // // removing code
                                        // async.each(contractorObjData.app_id, function(appId, appIdCallBack) {
                                        //     var contractorAddObj = {
                                        //         name_of_contractor: contractorObjData.name_of_contractor,
                                        //         contractor_email_id: contractorObjData.contractor_email_id,
                                        //         contractor_photo: contractorObjData.contractor_photo,
                                        //         app_id: appId,
                                        //         status: 1,
                                        //         created_date: currentTimeStamp,
                                        //     };

                                        //     Contractorprofile.upsert(contractorAddObj, function(err, contractorUpsertResult) {
                                        //         if (!err) {
                                        //             var appAccessObj = {
                                        //                 contractor_id: contractorUpsertResult.contractor_id,
                                        //                 contractor_email_id: contractorObjData.contractor_email_id,
                                        //                 app_id: contractorUpsertResult.app_id
                                        //             };

                                        //             create_access_Code(appAccessObj).then((result) => {
                                        //                 addContractorResult.contractor.push(contractorUpsertResult);
                                        //                 appIdCallBack();
                                        //             }, (err) => {
                                        //                 appIdCallBack();
                                        //             });

                                        //         } else {
                                        //             appIdCallBack();
                                        //         }
                                        //     });
                                        // }, (endloop) => {
                                        //     callback();
                                        // });




                                        //addContractorResult.contractor.push(contractorUpsertResult);

                                        if (contractorObjData.app_id.length > 0) {
                                            async.each(contractorObjData.app_id, function(appId, appIdCallBack) {

                                                var appAccessObj = {
                                                    contractor_id: contractorUpsertResult.contractor_id,
                                                    contractor_email_id: contractorObjData.contractor_email_id,
                                                    //app_id: contractorUpsertResult.app_id
                                                    app_id: appId
                                                };

                                                create_access_Code(appAccessObj).then((result) => {
                                                    //addContractorResult.contractor.push(contractorUpsertResult);
                                                    addContractorResult.addedApp.push(appId);
                                                    appIdCallBack();
                                                }, (err) => {
                                                    appIdCallBack();
                                                });


                                            }, (endloop) => {
                                                callback();
                                            });
                                        } else {
                                            callback();
                                        }


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
                                    cb(error(406, "somthing went wrong in inserting contractor"), null);
                                }
                            });






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
            //name_of_contractor: '',
            //contractor_email_id: '',
            //contractor_old_email_id: '',
            //contractor_photo: '',
            contractor_id: 0,
            app_id: [],
            status: '',
            created_date: currentTimeStamp,
        };
        var addContractorResult = {
            contractor: '',
            status: '',
            appDisabled: [],
            appEnabled: [],
            appAdded: []
        };

        //(contractorObj.name_of_contractor != undefined && contractorObj.name_of_contractor != null && contractorObj.name_of_contractor != '') ? contractorObjData.name_of_contractor = contractorObj.name_of_contractor: cb(error(406, 'name_of_contractor not found'), null);
        //(contractorObj.contractor_email_id != undefined && contractorObj.contractor_email_id != null && contractorObj.contractor_email_id != '') ? contractorObjData.contractor_email_id = contractorObj.contractor_email_id: '';
        (contractorObj.app_id != undefined && contractorObj.app_id != null && contractorObj.app_id != '' && contractorObj.app_id.length > 0) ? contractorObjData.app_id = contractorObj.app_id: [];
        //(contractorObj.contractor_photo != undefined && contractorObj.contractor_photo != null && contractorObj.contractor_photo != '') ? contractorObjData.contractor_photo = contractorObj.contractor_photo: '';
        if (contractorObj.status != undefined && contractorObj.status != null && contractorObj.status != '') {
            if (contractorObj.status == 'Active') {
                contractorObjData.status = 1;
            } else if (contractorObj.status == 'Inactive') {
                contractorObjData.status = 0;
            } else {
                contractorObjData.status = 1;
            }

        }
        (contractorObj.contractor_id != undefined && contractorObj.contractor_id != null && contractorObj.contractor_id != '') ? contractorObjData.contractor_id = contractorObj.contractor_id: cb(error(406, 'contractor_id not found'), null);
        //(contractorObj.contractor_old_email_id != undefined && contractorObj.contractor_old_email_id != null && contractorObj.contractor_old_email_id != '') ? contractorObjData.contractor_old_email_id = contractorObj.contractor_old_email_id: cb(error(406, 'contractor_email_id not found'), null);

        var userFindquery = "select usr.realm as username,usr.email from [User] as usr Inner join contractor_profile as contractor on contractor.contractor_email_id = usr.email where contractor.contractor_id =" + contractorObjData.contractor_id;
        Contractorprofile.dataSource.connector.query(userFindquery, (err, userResult) => {
            //UserModel.findOne({ where: { email: contractorObjData.contractor_old_email_id } }, function(err, userResult) {
            if (err) {
                cb(err, '');
            } else {

                //if is user exist already
                //if (userResult[0] != null && userResult[0] != undefined && userResult[0] != '') {
                if (userResult.length > 0) {

                    let asyncTasks = []; //array used to push functions and execute them in async.parallel

                    var appIdArr = [];
                    //var UpdateContractorQuery = "update contractor_profile set status = 0 where app_id = " + app + " and contractor_email_id = '" + contractorObjData.contractor_email_id + "'";

                    //--------------------- [ updating contractor email and name in table ] ------------------------------------
                    // if (contractorObjData.contractor_email_id != '' && contractorObjData.contractor_old_email_id != '' && (userResult.id != '' && userResult.id != null && userResult.id != undefined) && contractorObjData.name_of_contractor != '') {
                    //     let userObj = {
                    //         id: userResult.id,
                    //         email: contractorObjData.contractor_email_id,
                    //         username: contractorObjData.name_of_contractor
                    //     }
                    //     UserModel.upsert(userObj, function() {
                    //         if (!err) {

                    //         } else {
                    //             cb(error(406, "somthing went wrong"), null);
                    //         }
                    //     })
                    // }

                    // var findContractorAppid = "select app_id,contractor_id from contractor_profile where contractor_email_id = '" + contractorObj.contractor_old_email_id + "'";

                    // //Updating contractor_profile table
                    // Contractorprofile.dataSource.connector.query(findContractorAppid, (err, result) => {


                    //     if (!err) {

                    var UpdateContractorQuery = "update contractor_profile set status = " + contractorObjData.status;

                    // if (contractorObjData.name_of_contractor != null && contractorObjData.name_of_contractor != undefined && contractorObjData.name_of_contractor != '') {
                    //     UpdateContractorQuery += " , name_of_contractor = '" + contractorObjData.name_of_contractor + "'";
                    // }
                    // if (contractorObjData.contractor_email_id != null && contractorObjData.contractor_email_id != undefined && contractorObjData.contractor_email_id != '') {
                    //     UpdateContractorQuery += " , contractor_email_id = '" + contractorObjData.contractor_email_id + "'";
                    // }
                    // if (contractorObjData.app_id != undefined && contractorObjData.app_id != null) {

                    //     //var appIdToEnable = (contractorObjData.app_id).diff(appIdArr);

                    //     let contractorAppArrString = JSON.stringify(contractorObjData.app_id);
                    //     UpdateContractorQuery += " , app_id = '" + contractorAppArr + "'";
                    // }
                    // if (contractorObjData.contractor_photo != undefined && contractorObjData.contractor_photo != null && contractorObjData.contractor_photo != '') {
                    //     UpdateContractorQuery += " , contractor_photo = '" + contractorObjData.contractor_photo + "'";
                    // }
                    UpdateContractorQuery += " where contractor_id = '" + contractorObjData.contractor_id + "'";

                    Contractorprofile.dataSource.connector.query(UpdateContractorQuery, (err, result) => {

                        if (!err) {
                            addContractorResult.contractor = userResult;
                            addContractorResult.status = (contractorObjData.status) ? 'Active' : 'Inactive';

                            var findAppAcccessAppid = "select app_id from app_access where contractor_id = " + contractorObjData.contractor_id;

                            Contractorprofile.dataSource.connector.query(findAppAcccessAppid, (err, appIdResult) => {
                                if (!err) {

                                    for (const key in appIdResult) {
                                        appIdArr.push(appIdResult[key].app_id);
                                    }
                                    //appIdArr = JSON.parse(result.app_id);


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

                                            //var disableUserAppQuery = "update contractor_profile set status = 0 where app_id = " + app + " and contractor_email_id = '" + contractorObjData.contractor_email_id + "'";
                                            var disableUserAppQuery = "update app_access set status = 0 where app_id = " + app + " and contractor_id = '" + contractorObjData.contractor_id + "'";

                                            Contractorprofile.dataSource.connector.query(disableUserAppQuery, (err, result) => {
                                                if (!err) {
                                                    //addContractorResult.appDisabled.push({ "appDisabled": app });
                                                    addContractorResult.appDisabled.push(app);
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

                                            //var disableUserAppQuery = "update contractor_profile set status = 1 where app_id = " + app + " and contractor_email_id = '" + contractorObjData.contractor_email_id + "'";
                                            var disableUserAppQuery = "update app_access set status = 1 where app_id = " + app + " and contractor_id = '" + contractorObjData.contractor_id + "'";

                                            Contractorprofile.dataSource.connector.query(disableUserAppQuery, (err, result) => {
                                                if (!err) {

                                                    //addContractorResult.appEnabled.push({ "appEnabled": app });
                                                    addContractorResult.appEnabled.push(app);
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

                                            // var contractorAddObj = {
                                            //     name_of_contractor: contractorObjData.name_of_contractor,
                                            //     contractor_email_id: contractorObjData.contractor_email_id,
                                            //     contractor_photo: contractorObjData.contractor_photo,
                                            //     app_id: appId,
                                            //     status: 1,
                                            //     created_date: currentTimeStamp,
                                            // };

                                            // Contractorprofile.upsert(contractorAddObj, function(err, contractorUpsertResult) {
                                            //     if (!err) {
                                            var appAccessObj = {
                                                contractor_id: contractorObjData.contractor_id,
                                                contractor_email_id: userResult[0].email,
                                                //app_id: contractorUpsertResult.app_id,
                                                app_id: appId
                                            };

                                            create_access_Code(appAccessObj).then((result) => {
                                                //addContractorResult.appAdded.push({ "appAdded": contractorUpsertResult.app_id });
                                                //addContractorResult.appAdded.push({ "appAdded": appId });
                                                addContractorResult.appAdded.push(appId);
                                                appIdCallBack();
                                            }, (err) => {
                                                appIdCallBack();
                                            });

                                            // } else {
                                            //     appIdCallBack();
                                            // }
                                            //});

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
                                    cb(error(406, "somthing went wrong in selecting app Id"), null);
                                }
                            });

                        } else {
                            cb(error(406, "somthing went wrong in updating contractor"), null);
                        }
                    });


                    //     } else {
                    //         cb(error(406, "somthing went wrong in getting app id"), null);
                    //     }
                    // });






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


    Contractorprofile.get_contractor = function(contractorObj, cb) {

        //Refference of Appdetails model
        var AppdetailsModel = Contractorprofile.app.models.app_details;



        let asyncTasks = []; //array used to push functions and execute them in async.parallel

        var dataArrObj = contractorObj;
        var selectQuery = "Select contractor.contractor_id,contractor.contractor_email_id,contractor.name_of_contractor,contractor.contractor_photo,contractor.status,contractor.created_date from contractor_profile as contractor where 1=1 ";
        var contractorQueryDataArr = [];
        for (var o in dataArrObj) {

            if (o == "created_date") {
                if (dataArrObj[o] != 0) {
                    selectQuery += " AND contractor." + o + " >= (?)";
                    contractorQueryDataArr.push(dataArrObj[o]);
                }
            } else if (o == "updated_date") {
                if (dataArrObj[o] != 0) {
                    selectQuery += " AND contractor." + o + " > (?)";
                    contractorQueryDataArr.push(dataArrObj[o]);
                }
            } else if (o == "name_of_contractor") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND contractor." + o + " Like (?)";
                    contractorQueryDataArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "contractor_email_id") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND contractor." + o + " Like (?)";
                    contractorQueryDataArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND contractor." + o + " Like (?)";
                    contractorQueryDataArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND contractor." + o + " = (?)";
                    contractorQueryDataArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += "  ORDER BY contractor.contractor_id DESC  OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            contractorQueryDataArr.push(offset, dataArrObj['limit']);
        }

        Contractorprofile.dataSource.connector.query(selectQuery, contractorQueryDataArr, (err, result) => {
            cb(err, result);
            // if (!err) {

            //     cb(null, result);

            // } else {

            //     cb(error(406, "Something went wrong"), null);
            // }

        });



    }


    //******* [ Remote function to Get Contractor] *******//
    Contractorprofile.remoteMethod('get_contractor', {
        http: { path: '/get_contractor', verb: 'POST' },
        accepts: [
            { arg: 'contractorObj', type: 'object', http: { source: 'body' } }
        ],
        returns: { arg: 'result', type: 'object' }
    });


    //Functions to fetch books
    Contractorprofile.getContractorsCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from contractor_profile as contractor where 1=1 ";
        var contractorQueryDataArr = [];
        for (var o in dataArrObj) {

            if (o == "created_date") {
                if (dataArrObj[o] != 0) {
                    selectQuery += " AND contractor." + o + " >= (?)";
                    contractorQueryDataArr.push(dataArrObj[o]);
                }
            } else if (o == "updated_date") {
                if (dataArrObj[o] != 0) {
                    selectQuery += " AND contractor." + o + " > (?)";
                    contractorQueryDataArr.push(dataArrObj[o]);
                }

            } else if (o == "name_of_contractor") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND contractor." + o + " Like (?)";
                    contractorQueryDataArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "contractor_email_id") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND contractor." + o + " Like (?)";
                    contractorQueryDataArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND contractor." + o + " Like (?)";
                    contractorQueryDataArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND contractor." + o + " = (?)";
                    contractorQueryDataArr.push(dataArrObj[o]);
                }
            }
        }

        //console.log("selectQuery ", selectQuery);
        Contractorprofile.dataSource.connector.query(selectQuery, contractorQueryDataArr, (err, result) => {
            cb(err, result);
            // if (!err) {
            //     cb(null, result);
            // } else {
            //     cb(error(406, "Something went wrong"), null);
            // }
        });
    }

    Contractorprofile.remoteMethod('getContractorsCount', {
        http: { path: '/getContractorsCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //*************** Getting contractor detail data **********/
    Contractorprofile.get_contractor_details = function(contractorDataObj, cb) {



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

        var contractorData = {
            contractorDetails: {},
            affiliations: [],
            equipment: [],
            specialization: [],
            sub_specialization: [],
            workGroup: [],
            apps: [],
            project_count: 0,
        };

        var contractor_Id = '';

        (contractorDataObj.contractor_id != '' && contractorDataObj.contractor_id != null && contractorDataObj.contractor_id != undefined) ? contractor_Id = contractorDataObj.contractor_id: cb(error(406, "Contractor Id not found"), null);

        var affiliationNameQuery = "select profile.contractor_id,profile.name_of_contractor,profile.company_name,profile.contractor_photo,profile.contractor_cover_photo,profile.contractor_email_id,profile.address,profile.city_id,profile.zip,profile.created_date,profile.updated_date,profile.status,city.city_name,municipality.id as municipality_id,municipality.name as municipality_name,profile.education_qualification,profile.about_me,profile.credentials from contractor_profile as profile LEFT JOIN city on profile.city_id = city.city_id LEFT JOIN municipality on profile.municipality_id = municipality.id where profile.contractor_id =" + contractor_Id;
        Contractorprofile.dataSource.connector.query(affiliationNameQuery, (err, contractorObj) => {
            //======================[Getting Contractor Details]=============
            //Contractorprofile.findOne({ where: { contractor_id: contractor_Id } }, function(err, contractorObj) {
            if (!err) {

                //contractor obj 
                contractorData.contractorDetails = contractorObj[0];

                let asyncTasks = []; //array used to push functions and execute them in async.parallel

                //======================[Getting Contractor Affiliations ]=============
                asyncTasks.push((callback) => {
                    var affiliationNameQuery = "SELECT affialition.certificate_name,affilation_mapping.others FROM contractor_affiliation_master as affialition INNER JOIN contractor_affiliation_mapping as affilation_mapping on affilation_mapping.certificate_id = affialition.certificate_id WHERE affialition.status =1 AND affilation_mapping.contractor_id =" + contractor_Id;
                    Contractorprofile.dataSource.connector.query(affiliationNameQuery, (err, affiliationData) => {

                        //ContractoraffiliationmappingModel.find({ where: { contractor_id: contractor_Id } }, function(err, affiliationData) {
                        if (!err) {
                            contractorData.affiliations = affiliationData;
                            callback();
                        } else {
                            callback();
                        }
                    });
                });

                asyncTasks.push((callback) => {
                    var projectCountQuery = "select count(project_id) as total from projects LEFT JOIN contractor_profile as profile on profile.contractor_id = projects.contractor_id where profile.contractor_id =" + contractor_Id;
                    Contractorprofile.dataSource.connector.query(projectCountQuery, (err, projectTotal) => {

                        //ContractoraffiliationmappingModel.find({ where: { contractor_id: contractor_Id } }, function(err, affiliationData) {
                        if (!err) {
                            contractorData.project_count = projectTotal[0].total;
                            callback();
                        } else {
                            callback();
                        }
                    });
                });

                //======================[Getting Contractor Specialization ]=============
                asyncTasks.push((callback) => {
                    var specializtionQuery = "SELECT specialization.specialization_name  from contractor_specialization_master as specialization  INNER JOIN contractor_specialization_mapping as specaliznMap  on specaliznMap.specialization_id = specialization.specialization_id  where specialization.status = 1 AND specaliznMap.contractor_id = " + contractor_Id;
                    //ContractorspecializationmappingModel.find({ where: { contractor_id: contractor_Id } }, function(err, specializationData) {
                    Contractorprofile.dataSource.connector.query(specializtionQuery, (err, specializationData) => {
                        if (!err) {
                            contractorData.specialization = specializationData;
                            callback();
                        } else {
                            callback();
                        }
                    });
                });

                // //======================[Getting Contractor SubSpecialization ]=============
                // asyncTasks.push((callback) => {
                //     var subSpecializationQuery = "SELECT specialization.sub_specialization from sub_specialization_master as specialization INNER JOIN contractor_specialization_mapping as specaliznMap on specaliznMap.specialization_id = specialization.specialization_id where specaliznMap.contractor_id = " + contractor_Id;
                //     Contractorprofile.dataSource.connector.query(subSpecializationQuery, (err, subSpecializationData) => {
                //         //SubSpecializationmappingModel.find({ where: { contractor_id: contractor_Id } }, function(err, subSpecializationData) {
                //         if (!err) {
                //             contractorData.sub_specialization = subSpecializationData;
                //             callback();
                //         } else {
                //             callback();
                //         }
                //     });
                // });

                asyncTasks.push((callback) => {
                    var equipmentQuery = "SELECT eqpmntMaster.equipment_name FROM equipments_master as eqpmntMaster INNER JOIN equipments_mapping as eqpmntMappng on eqpmntMappng.equipment_id = eqpmntMaster.equipment_id where eqpmntMaster.status = 1 AND eqpmntMappng.contractor_id = " + contractor_Id;
                    Contractorprofile.dataSource.connector.query(equipmentQuery, (err, equipmentData) => {
                        //EquipmentsmappingModel.find({ where: { contractor_id: contractor_Id } }, function(err, equipmentData) {
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

                    WorkgroupModel.find({ where: { contractor_id: contractor_Id } }, function(err, workGroupData) {
                        if (!err) {
                            contractorData.workGroup = workGroupData;
                            callback();
                        } else {
                            callback();
                        }
                    });
                });

                //======================[Getting Contractor WorkGroup ]=============
                asyncTasks.push((callback) => {

                    //Query to get app name from app id
                    var appNameQuery = "SELECT appDetail.app_name,appDetail.app_id FROM app_details as appDetail Inner Join app_access as appAccess on appAccess.app_id = appDetail.app_id                   where appAccess.status = 1 AND appAccess.contractor_id = " + contractor_Id;
                    Contractorprofile.dataSource.connector.query(appNameQuery, (err, appResult) => {
                        //WorkgroupModel.find({ where: { contractor_id: contractor_Id } }, function(err, workGroupData) {
                        if (!err) {
                            contractorData.apps = appResult;
                            callback();
                        } else {
                            callback();
                        }
                    });
                });

                //execute the functioins inside asyncTasks array in parallelLimit of 1
                async.parallelLimit(asyncTasks, 1, function(err, result) {

                    if (!err) {
                        cb(null, contractorData); //Remote method call back
                    } else {
                        cb(error(406, "Something went wrong"), null); //Remote method call back
                    }

                });


            } else {
                cb(error(406, "something went wrong"), null);
            }
        });

    }

    //******* [ Remote function to Get Contractor] *******//
    Contractorprofile.remoteMethod('get_contractor_details', {
        http: { path: '/get_contractor_details', verb: 'POST' },
        accepts: [
            { arg: 'contractorData', type: 'object', http: { source: 'body' } }
        ],
        returns: { arg: 'data', type: 'object' }
    });


    //*************** Getting contractor email match **********/
    Contractorprofile.getContractorEmailCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from contractor_profile as contrctr where 1=1 ";
        var specializationArr = [];
        for (var o in dataArrObj) {

            if (o == "contractor_email_id") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND contrctr." + o + " = '" + dataArrObj[o] + "'";
                    //specializationArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != undefined && dataArrObj[o] != null && !isNaN(dataArrObj[o])) {
                    selectQuery += " AND contrctr." + o + " Like (?)";
                    specializationArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND contrctr." + o + " = (?)";
                    specializationArr.push(dataArrObj[o]);
                }
            }
        }

        //console.log("dataArrObj :", dataArrObj);
        //console.log("name match query :", selectQuery);
        Contractorprofile.dataSource.connector.query(selectQuery, specializationArr, (err, result) => {
            cb(err, result);
        });
    }

    //******* [ Remote function to Match contractor email] *******//
    Contractorprofile.remoteMethod('getContractorEmailCount', {
        http: { path: '/getContractorEmailCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });






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

                    var baseUrl = Contractorprofile.app.get('apiHostname');
                    var imageSrc = '';
                    if (appName == 'Profolio') {
                        imageSrc = baseUrl + "/mailer_images/profolio.jpg";
                    } else if (appName == 'Knowledge Bank') {
                        imageSrc = baseUrl + "/mailer_images/knowledeg.jpg";
                    }
                     var appLink = (contractorDataObj.app_id == 1) ? "http://primebuilder.id:4500/apk/profolio-V1.0.apk":"http://primebuilder.id:4500/apk/knowledge-bank-V1.0.apk";
                    Contractorprofile.app.models.Email.send({
                        to: contractorDataObj.contractor_email_id,
                        from: 'support.digital-ph@lafargeholcim.com',
                        subject: (contractorDataObj.app_id == 1) ? 'Your Profolio Activation code' : "Knowledge Bank Activation code",
                        text: 'my text',
                        //html: "<p>Dear User,<br /><br /><br />Your one-time password is " + accessCode + "<br /><br /><br />Use this one-time password to login and further ensure security. <br /><br />Don’t forget to set your pattern within the app.<br /><br /></br>Thanks,<br>" + appName + " Team</p>"
                        html: `<html>

                        <head>
                            <title>Lenovo</title>
                            <meta name="apple-mobile-web-app-capable" content="yes">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
                            <meta name="apple-mobile-web-app-status-bar-style" content="black">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <style type="text/css">
                                p.MsoNormal img {
                                    display: block !important;
                                }
                            </style>
                        </head>
                        
                        <body style="margin:0; padding:0;">
                            <table width="600" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:#fff;border: solid 1px #3f7bdd" bgcolor="#fff" align="center">
                                <tbody>
                        
                                    <tr>
                                        <td valign="top" style="padding: 30px 0;">
                                            <img src="` + imageSrc + `" width="600" height="121" alt="" style="display: block; border: 0;outline:0;" /></td>
                                    </tr>
                        
                                    <tr>
                                        <td valign="top" align="center" style="padding:0px 0 20px 0;">
                                            <table width="490" border="0" cellspacing="0" cellpadding="0" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px  5px;text-align: left;">Dear User</td>
                                                    </tr>
													
													 <tr>
                                                                <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px 5px;text-align: left;">Use the ` + appLink + ` to download the app.</td>
                                                            </tr>
													
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px 5px;text-align: left;">Your activation code is ` + accessCode + `</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px 5px;text-align: left;">Use this activation code to login and further ensure security.</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 30px 5px;text-align: left;">Don’t forget to set your pattern within the app.</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 5px 5px;text-align: left;">Regards</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 10px 5px;text-align: left;">` + appName + ` Team</td>
                                                    </tr>
                        
                                                </tbody>
                                            </table>
                        
                                        </td>
                                    </tr>
                        
                        
                        
                        
                        
                                </tbody>
                            </table>
                        
                        </body>
                        
                        </html>`
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

    //Generate random number for access code
    function regenrate_access_Code(contractorDataObj, cb) {
        return new Promise((resolve, reject) => {


            var responseData = { err: '', data: '' };
            var accessCode = Math.floor(1000 + Math.random() * 9000); //genrate random number as a access code

            //check if the random generated accessCode exists in the accessCode Table
            // Appaccess.findOne({ where: { access_code: accessCode } }, function(err, resultObj) {
            //     if (!err) {

            //         if (resultObj != null && typeof resultObj == 'object') {
            //             create_access_Code(contractorDataObj, cb);
            //} else {
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

             var appLink = (contractorDataObj.app_id == 1) ? "http://primebuilder.id:4500/apk/profolio-V1.0.apk":"http://primebuilder.id:4500/apk/knowledge-bank-V1.0.apk";
            //update newly generated access code in table
            var upsertQuery = "MERGE app_access AS Target  USING (SELECT contractor_id, app_id FROM app_access where contractor_id =" + contractorDataObj.contractor_id + "and app_id=" + contractorDataObj.app_id + ") AS Source ON (Target.contractor_id = Source.contractor_id AND Target.app_id = Source.app_id)  WHEN MATCHED THEN UPDATE SET Target.access_code =" + accessCode + " WHEN NOT MATCHED BY TARGET THEN INSERT (app_id,contractor_id,access_code) VALUES (" + contractorDataObj.app_id + "," + contractorDataObj.contractor_id + "," + accessCode + ");";

            Appaccess.dataSource.connector.query(upsertQuery, (err, resultObj) => {
                if (!err) {

                    var imageSrc = '';
                    if (appName == 'Profolio') {
                        imageSrc = baseUrl + "/mailer_images/profolio.jpg";
                    } else if (appName == 'Knowledge Bank') {
                        imageSrc = baseUrl + "/mailer_images/knowledeg.jpg";
                    }

                    Appaccess.app.models.Email.send({
                        to: contractorDataObj.contractor_email_id,
                        from: 'support.digital-ph@lafargeholcim.com',
                        subject: (contractorDataObj.app_id == 1) ? 'Your Profolio Activation code' : "Knowledge Bank Activation code",
                        text: 'my text',
                        //html: "<p>Hi,<br /><br /><br />Please use the below one time password to login:<br /><br /><br />" + accessCode + "<br /><br /><br />Once you use this option, don’t forget to set your pattern in the app.<br /><br /><br />Thanks,<br>Profolio App Team</p>"
                        //html: "<p>Dear User,<br /><br /><br />Your one-time password is " + accessCode + "<br /><br /><br />Use this one-time password to login and further ensure security. <br /><br />Don’t forget to set your pattern within the app.<br /></br></br>Thanks,<br>" + appName + " Team</p>"
                        html: `<html>

                                    <head>
                                        <title>Lenovo</title>
                                        <meta name="apple-mobile-web-app-capable" content="yes">
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
                                        <meta name="apple-mobile-web-app-status-bar-style" content="black">
                                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                                        <style type="text/css">
                                            p.MsoNormal img {
                                                display: block !important;
                                            }
                                        </style>
                                    </head>
                                    
                                    <body style="margin:0; padding:0;">
                                        <table width="600" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:#fff;border: solid 1px #3f7bdd" bgcolor="#fff" align="center">
                                            <tbody>
                                    
                                                <tr>
                                                    <td valign="top" style="padding: 30px 0;">
                                                        <img src="` + imageSrc + `" width="600" height="121" alt="" style="display: block; border: 0;outline:0;" /></td>
                                                </tr>
                                    
                                                <tr>
                                                    <td valign="top" align="center" style="padding:0px 0 20px 0;">
                                                        <table width="490" border="0" cellspacing="0" cellpadding="0" align="center">
                                                            <tbody>
                                                                <tr>
                                                                    <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px  5px;text-align: left;">Dear User</td>
                                                                </tr>
																
																<tr>
                                                                <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px 5px;text-align: left;">Use the ` + appLink + ` to download the app.</td>
                                                            </tr>
																
                                                                <tr>
                                                                    <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px 5px;text-align: left;">Your activation code is ` + accessCode + `</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px 5px;text-align: left;">Use this activation code to login and further ensure security.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 30px 5px;text-align: left;">Don’t forget to set your pattern within the app.</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 5px 5px;text-align: left;">Regards</td>
                                                                </tr>
                                                                <tr>
                                                                    <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 10px 5px;text-align: left;">` + appName + ` Team</td>
                                                                </tr>
                                    
                                                            </tbody>
                                                        </table>
                                    
                                                    </td>
                                                </tr>
                                    
                                    
                                    
                                    
                                    
                                            </tbody>
                                        </table>
                                    
                                    </body>
                                    
                                    </html>`
                    }, function(err, mail) {
                        console.log(err);
                        if (!err) {
                            resolve("Mail send");
                            //cb(null, "Mail send");
                        } else {
                            //cb(error(406, 'Mail not send'), '');
                            reject("mail not send");
                        }

                    });

                } else {
                    reject('Something went wrong');
                }
            });


            //accessCode upsert ends here
            //}
            //     } else {
            //         reject('Something went wrong');
            //     }
            // });
            //accessCode findOne ends here
        });
    }



};