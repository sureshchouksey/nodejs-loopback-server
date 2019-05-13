'use strict';
var async = require('async');

module.exports = function(Projects) {
    //******* [ Project update function] *******//
    Projects.project_update = function(projectDataObj, cb) {

        //getting refference of contractor_profile model
        var ContractorProfileModel = Projects.app.models.contractor_profile;
        //getting refference of Appdetails model
        var AppdetailsModel = Projects.app.models.app_details;
        //getting refference of type_of_housing_mapping model
        var TypeOfHousingMappingModel = Projects.app.models.type_of_housing_mapping;
        //getting refference of construction_stage_mapping model
        var ConstructionStageMappingModel = Projects.app.models.construction_stage_mapping;
        //getting refference of work_group model
        var WorkgroupModel = Projects.app.models.work_group;


        //declating variables to used in upsert operation
        var projectObj = {
            project_id: '',
            contractor_id: '',
            project_name: '',
            project_type: '',
            project_location: '',
            city_id: '',
            zip: '',
            contact_reference_mobile: '',
            contact_reference_landline: '',
            construction_area: '',
            measurement_unit: '',
            project_cost: '',
            project_start_date: '',
            project_completion_date: '',
            project_duration_months: '',
            project_duration_years: '',
            project_bookmark: '',
            created_date: '',
            updated_date: '',
            status: '',
            project_cover_photo: "",
            project_status: "",
            municipality_id: "",

        };
        var typeOfHousingObj = {};
        var construction_stage = {};
        var work_group = [];
        var contractorStatus = false;
        var appStatus = false;
        var projectResult = {
            "project_details": {},
            "typeOfHousingObj": {},
            "construction_stage": {},
            "work_group": []
        };

        //validation for projectDataObj
        (projectDataObj.project_id != undefined && projectDataObj.project_id != null && projectDataObj.project_id != '') ? projectObj.project_id = projectDataObj.project_id: delete projectObj.project_id;
        (projectDataObj.app_id != undefined && projectDataObj.app_id != null && projectDataObj.app_id != '') ? '' : cb("App id is not valid", "");
        (projectDataObj.contractor_id != undefined && projectDataObj.contractor_id != null && projectDataObj.contractor_id != '') ? projectObj.contractor_id = projectDataObj.contractor_id: cb('Error Contractor ID is empty', '');
        (projectDataObj.project_name != undefined && projectDataObj.project_name != null && projectDataObj.project_name != '') ? projectObj.project_name = projectDataObj.project_name: cb('Error project name is empty', '');
        (projectDataObj.project_type != undefined && projectDataObj.project_type != null && projectDataObj.project_type != '') ? projectObj.project_type = projectDataObj.project_type: cb('Error project type is defined(upcomming or completed)', '');
        (projectDataObj.project_location != undefined && projectDataObj.project_location != null && projectDataObj.project_location != '') ? projectObj.project_location = projectDataObj.project_location: '';
        (projectDataObj.city_id != undefined && projectDataObj.city_id != null && projectDataObj.city_id != '') ? projectObj.city_id = projectDataObj.city_id: '';
        (projectDataObj.zip != undefined && projectDataObj.zip != null && projectDataObj.zip != '') ? projectObj.zip = projectDataObj.zip: '';
        (projectDataObj.contact_reference_mobile != undefined && projectDataObj.contact_reference_mobile != null != projectDataObj.contact_reference_mobile != '') ? projectObj.contact_reference_mobile = projectDataObj.contact_reference_mobile: '';
        (projectDataObj.contact_reference_landline != undefined && projectDataObj.contact_reference_landline != null && projectDataObj.contact_reference_landline != '') ? projectObj.contact_reference_landline = projectDataObj.contact_reference_landline: '';
        (projectDataObj.construction_area != undefined && projectDataObj.construction_area != null && projectDataObj.construction_area != '') ? projectObj.construction_area = projectDataObj.construction_area: '';
        (projectDataObj.measurement_unit != undefined && projectDataObj.measurement_unit != null && projectDataObj.measurement_unit != '') ? projectObj.measurement_unit = projectDataObj.measurement_unit: '';
        (projectDataObj.project_cost != undefined && projectDataObj.project_cost != null && projectDataObj.project_cost != '') ? projectObj.project_cost = projectDataObj.project_cost: '';
        (projectDataObj.project_start_date != undefined && projectDataObj.project_start_date != null && projectDataObj.project_start_date != '') ? projectObj.project_start_date = projectDataObj.project_start_date: '';
        (projectDataObj.project_completion_date != undefined && projectDataObj.project_completion_date != null && projectDataObj.project_completion_date != '') ? projectObj.project_completion_date = projectDataObj.project_completion_date: '';
        (projectDataObj.project_duration_months != undefined && projectDataObj.project_duration_months != null && projectDataObj.project_duration_months != '') ? projectObj.project_duration_months = projectDataObj.project_duration_months: '';
        (projectDataObj.project_duration_years != undefined && projectDataObj.project_duration_years != null && projectDataObj.project_duration_years != '') ? projectObj.project_duration_years = projectDataObj.project_duration_years: '';
        (projectDataObj.project_bookmark != undefined && projectDataObj.project_bookmark != null && projectDataObj.project_bookmark != '') ? projectObj.project_bookmark = projectDataObj.project_bookmark: '';
        (projectDataObj.created_date != undefined && projectDataObj.created_date != null && projectDataObj.created_date != '') ? projectObj.created_date = projectDataObj.created_date: '';
        (projectDataObj.updated_date != undefined && projectDataObj.updated_date != null && projectDataObj.updated_date != '') ? projectObj.updated_date = projectDataObj.updated_date: '';
        (projectDataObj.status != undefined && projectDataObj.status != null && projectDataObj.status != '') ? projectObj.status = projectDataObj.status: '';
        (projectDataObj.typeOfHousingObj != undefined && projectDataObj.typeOfHousingObj != null && projectDataObj.typeOfHousingObj != '') ? typeOfHousingObj = projectDataObj.typeOfHousingObj: '';
        (projectDataObj.construction_stage != undefined && projectDataObj.construction_stage != null && projectDataObj.construction_stage != '') ? construction_stage = projectDataObj.construction_stage: '';
        (projectDataObj.work_group != undefined && projectDataObj.work_group != null && projectDataObj.work_group != '') ? work_group = projectDataObj.work_group: '';
        (projectDataObj.project_cover_photo != undefined && projectDataObj.project_cover_photo != null && projectDataObj.project_cover_photo != '') ? projectObj.project_cover_photo = projectDataObj.project_cover_photo: '';
        (projectDataObj.project_status != undefined && projectDataObj.project_status != null && projectDataObj.project_status != '') ? projectObj.project_status = projectDataObj.project_status: '';
        (projectDataObj.municipality_id != undefined && projectDataObj.municipality_id != null && projectDataObj.municipality_id != '') ? projectObj.municipality_id = projectDataObj.municipality_id: '';
        //======================[Checking if Contractor is active or not]=============
        ContractorProfileModel.findOne({ where: { contractor_id: projectDataObj.contractor_id, status: 1 } }, function(err, contractorStatusResult) {
            if (err) {
                cb(err, '');
            } else {

                if (contractorStatusResult != undefined && contractorStatusResult != null && contractorStatusResult != '') {
                    contractorStatus = true;

                    //if Contractor is active ----------------------------------------------------
                    if (contractorStatus) {

                        //======================[Checking if app is active or not]=============
                        AppdetailsModel.findOne({ where: { app_id: projectDataObj.app_id, status: 1 } }, function(err, appResult) {
                            if (err) {
                                cb(err, '');
                            } else {
                                if (appResult != undefined && appResult != null && appResult != '') {
                                    appStatus = true;

                                    //if app is active ----------------------------------------------------
                                    if (appStatus) {

                                        //===============[Upsert in project model]=============
                                        Projects.upsert(projectObj, function(err, projectUpsertResult) {
                                            if (!err) {
                                                //getting upserted project into project result object 
                                                projectResult.project_details = projectUpsertResult;

                                                let asyncTasks = []; //array used to push functions and execute them in async.parallel

                                                if (typeOfHousingObj) {

                                                    asyncTasks.push((callback) => {
                                                        var deleteQuery = "delete from type_of_housing_mapping where project_id = " + projectResult.project_details.project_id;

                                                        ContractorProfileModel.dataSource.connector.query(deleteQuery, (err, resultObj) => {
                                                            if (!err) {
                                                                //upserting typeOfHousingObj into type Of Housing Obj mapping model
                                                                //set contractor affiliation other certificate name to empty if not set.
                                                                (typeOfHousingObj.others != '' && typeOfHousingObj.others != null && typeOfHousingObj.others != undefined) ? '' : typeOfHousingObj.others = '';
                                                                //check row ID for update . If id exits then it is a update request
                                                                (typeOfHousingObj.id != undefined && typeOfHousingObj.id != null && typeOfHousingObj.id != '') ? '' : delete typeOfHousingObj.id;
                                                                typeOfHousingObj.project_id = projectResult.project_details.project_id;
                                                                //============ [ Upsert for type of housing mapping Model ] =====================
                                                                TypeOfHousingMappingModel.upsert(typeOfHousingObj, function(err, upserResult) {
                                                                    if (!err) {

                                                                        projectResult.typeOfHousingObj = upserResult;
                                                                        callback();
                                                                    } else {

                                                                        callback();
                                                                    }
                                                                });
                                                            } else {
                                                                callback();
                                                            }
                                                        });
                                                    });

                                                }
                                                if (construction_stage) {
                                                    asyncTasks.push((callback) => {
                                                        var deleteQuery = "delete from construction_stage_mapping where project_id = " + projectResult.project_details.project_id;

                                                        ContractorProfileModel.dataSource.connector.query(deleteQuery, (err, resultObj) => {
                                                            if (!err) {
                                                                //upserting ConstructionStage into ConstructionStage Mapping Model
                                                                //set ConstructionStage other name to empty if not set.
                                                                (construction_stage.others != '' && construction_stage.others != null && construction_stage.others != undefined) ? '' : construction_stage.others = '';
                                                                //check row ID for update . If id exits then it is a update request
                                                                (construction_stage.id != undefined && construction_stage.id != null && construction_stage.id != '') ? '' : delete construction_stage.id;
                                                                construction_stage.project_id = projectResult.project_details.project_id;
                                                                //============ [ Upsert for type of ConstructionStage mapping Model ] =====================
                                                                ConstructionStageMappingModel.upsert(construction_stage, function(err, upserResult) {
                                                                    if (!err) {

                                                                        projectResult.construction_stage = upserResult;
                                                                        callback();
                                                                    } else {

                                                                        callback();
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    });
                                                }
                                                if (work_group) {
                                                    asyncTasks.push((callback) => {
                                                        var deleteQuery = "delete from work_group where project_id = " + projectResult.project_details.project_id;

                                                        ContractorProfileModel.dataSource.connector.query(deleteQuery, (err, resultObj) => {
                                                            if (!err) {


                                                                async.each(work_group, function(projectTeam, projectTeamCallback) {
                                                                    //check row ID for update . If id exits then it is a update request
                                                                    (projectTeam.id != undefined && projectTeam.id != null && projectTeam.id != '') ? projectTeam.work_group_id = projectTeam.id: delete projectTeam.id;
                                                                    projectTeam.project_id = projectResult.project_details.project_id;
                                                                    //============ [ Upsert for contractor_projectTeam in workgroup mapping Model ] =====================
                                                                    WorkgroupModel.upsert(projectTeam, function(err, upserResult) {
                                                                        if (!err) {

                                                                            projectResult.work_group.push(upserResult);
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
                                                    cb("", projectResult); //Remote method call back
                                                });

                                            } else {
                                                cb("Error while upserting projectObject", '');
                                            }
                                        });

                                    }
                                } else {
                                    cb("app is restricted", '');
                                }
                            }
                        });
                    }
                } else {
                    cb('Contactor is restricted', '');
                }
            }
        });
    }

    //******* [ Remote function for Project Update ] *******//
    Projects.remoteMethod('project_update', {
        http: { path: '/project_update', verb: 'POST' },
        accepts: [
            { arg: 'projectDataObj', type: 'object', http: { source: 'body' } }
        ],
        returns: { arg: 'data', type: 'object' }
    });


    //******* [ Project Down Sync function] *******//
    Projects.projects_dwnSync = function(contractor_id, cb) {

        //getting refference of contractor_profile model
        var ContractorProfileModel = Projects.app.models.contractor_profile;
        //getting refference of type_of_housing_mapping model
        var TypeOfHousingMappingModel = Projects.app.models.type_of_housing_mapping;
        //getting refference of construction_stage_mapping model
        var ConstructionStageMappingModel = Projects.app.models.construction_stage_mapping;
        //getting refference of work_group model
        var WorkgroupModel = Projects.app.models.work_group;

        var ProjectsResultArr = [];


        var contractorId = (contractor_id != undefined && contractor_id != null && contractor_id != '') ? contractor_id : cb("contractor id not found", null);

        //======================[Checking if Contractor is active or not]=============
        ContractorProfileModel.findOne({ where: { contractor_id: contractorId, status: 1 } }, function(err, contractorStatusResult) {
            if (err) {
                cb(err, '');
            } else {

                if (contractorStatusResult != undefined && contractorStatusResult != null && contractorStatusResult != '') {
                    var contractorStatus = true;

                    //if Contractor is active ----------------------------------------------------
                    if (contractorStatus) {
                        //======================[find all projects of Contractor]=============
                        Projects.find({ where: { contractor_id: contractorId, status: 1 } }, function(err, projectArrResult) {
                            if (!err) {

                                let asyncTasks = []; //array used to push functions and execute them in async.parallel

                                if (projectArrResult.length != 0) {


                                    async.each(projectArrResult, function(project, projectCallback) {

                                        let projectResult = {
                                            "project_details": {},
                                            "typeOfHousingObj": {},
                                            "construction_stage": {},
                                            "work_group": []
                                        };

                                        //single project 
                                        projectResult.project_details = project;

                                        asyncTasks.push((callback) => {

                                            //======================[find all workgroup of projects]=============
                                            WorkgroupModel.find({ where: { project_id: project.project_id } }, function(err, workGroupArr) {

                                                if (!err) {
                                                    projectResult.work_group = workGroupArr;
                                                    //ProjectsResultArr.push(projectResult);
                                                    callback();
                                                } else {
                                                    callback();
                                                }

                                            });
                                        });

                                        asyncTasks.push((callback) => {

                                            //======================[find all ttypeOfHousing of projects]=============
                                            TypeOfHousingMappingModel.find({ where: { project_id: project.project_id } }, function(err, typOfHusngRslt) {
                                                if (!err) {
                                                    projectResult.typeOfHousingObj = typOfHusngRslt;
                                                    callback();
                                                } else {
                                                    callback();
                                                }
                                            });
                                        });

                                        asyncTasks.push((callback) => {

                                            //======================[find all constrtnStgMapggn of projects]=============
                                            ConstructionStageMappingModel.find({ where: { project_id: project.project_id } }, function(err, cunstrctnStaggingRslt) {
                                                if (!err) {
                                                    projectResult.construction_stage = cunstrctnStaggingRslt;
                                                    callback();
                                                } else {
                                                    callback();
                                                }
                                            });
                                        });
                                        asyncTasks.push((callback) => {
                                            ProjectsResultArr.push(projectResult);
                                            callback();
                                        });


                                    }, (endloop) => {
                                        // if result is true then every file exists
                                        //cb("",ProjectsResultArr);
                                        projectCallback();
                                    });


                                    //execute the functioins inside asyncTasks array in parallelLimit of 1
                                    async.parallelLimit(asyncTasks, 1, function(err, result) {
                                        cb("", ProjectsResultArr); //Remote method call back
                                    });

                                } else {
                                    cb("", ProjectsResultArr);
                                }



                            } else {
                                cb("something went wrong to fetch projects", null);
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

    //******* [ Remote function for Project Down Sync ] *******//
    Projects.remoteMethod('projects_dwnSync', {
        http: { path: '/projects_dwnSync', verb: 'GET' },
        accepts: [
            { arg: 'contractor_id', type: 'number' }
        ],
        returns: { arg: 'data', type: 'object' }
    });
    //end of main model


    Projects.getProjects = function(dataArrObj, cb) {

        //getting refference of work_group model
        var WorkgroupModel = Projects.app.models.work_group;

        var selectQuery = "select pro.*, con.name_of_contractor , mu.city_name, mu.name as muncipality_name  from projects pro left join contractor_profile con on con.contractor_id = pro.contractor_id left join municipality mu on mu.id = pro.municipality_id where 1=1 ";
        var bookArr = [];
        for (var o in dataArrObj) {
            if (o == "created_date" && dataArrObj[o] != "") {
                selectQuery += " AND pro." + o + " >= (?)";
                bookArr.push(dataArrObj[o]);
            } else if (o == "updated_date") {
                selectQuery += " AND pro." + o + " > (?)";
                bookArr.push(dataArrObj[o]);
            } else if (o == "project_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND pro." + o + " Like (?)";
                    bookArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "name_of_contractor") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND con." + o + " Like (?)";
                    bookArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND pro." + o + " = (?)";
                    bookArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += "  ORDER BY pro.project_id DESC  OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            bookArr.push(offset, dataArrObj['limit']);
        }

        Projects.dataSource.connector.query(selectQuery, bookArr, (err, result) => {

            //cb(err, result);
            let asyncTasks = []; //array used to push functions and execute them in async.parallel
            var ProjectsResultArr = [];

            if (result.length != 0 && dataArrObj.project_id) {



                async.each(result, function(project, projectCallback) {

                    let projectResult = {
                        "project_details": {},
                        "typeOfHousingObj": {},
                        "construction_stage": {},
                        "work_group": [],
                        "sub_type_of_housing": ""
                    };

                    //single project 
                    projectResult.project_details = project;

                    asyncTasks.push((callback) => {

                        //======================[find all workgroup of projects]=============
                        WorkgroupModel.find({ where: { project_id: project.project_id } }, function(err, workGroupArr) {

                            if (!err) {
                                projectResult.work_group = workGroupArr;
                                //ProjectsResultArr.push(projectResult);
                                callback();
                            } else {
                                callback();
                            }

                        });
                    });

                    asyncTasks.push((callback) => {

                        //======================[find all ttypeOfHousing of projects]=============
                        var typeOfHousingQuery = "select typeMaster.type_of_housing,typeMap.others from type_of_housing_master as typeMaster Inner Join type_of_housing_mapping as typeMap on  typeMap.type_of_housing_id = typeMaster.id Inner Join projects as prjt on typeMap.project_id = prjt.project_id where prjt.project_id = " + dataArrObj.project_id;
                        Projects.dataSource.connector.query(typeOfHousingQuery, (err, typOfHusngRslt) => {
                            //TypeOfHousingMappingModel.find({ where: { project_id: project.project_id } }, function(err, typOfHusngRslt) {
                            if (!err) {
                                projectResult.typeOfHousingObj = typOfHusngRslt;
                                callback();
                            } else {
                                callback();
                            }
                        });
                    });

                    asyncTasks.push((callback) => {
                        var constructionStagingQuery = "select constStgMaster.construction_stage_name,constStgMaster.project_status,constMap.others from construction_stage_master as constStgMaster Inner Join construction_stage_mapping as constMap on  constMap.construction_stage_id = constStgMaster.construction_stage_id Inner Join projects as prjt on constMap.project_id = prjt.project_id where prjt.project_id = " + dataArrObj.project_id;
                        //======================[find all constrtnStgMapggn of projects]=============

                        Projects.dataSource.connector.query(constructionStagingQuery, (err, cunstrctnStaggingRslt) => {
                            //    ConstructionStageMappingModel.find({ where: { project_id: project.project_id } }, function(err, cunstrctnStaggingRslt) {
                            if (!err) {
                                projectResult.construction_stage = cunstrctnStaggingRslt;
                                callback();
                            } else {
                                callback();
                            }
                        });
                    });

                    asyncTasks.push((callback) => {
                        var subtypeOfHousingQuery = "select subTypHousng.name as sub_type_of_housing from type_of_housing_mapping as typHousngMap Inner Join  sub_type_of_housing_master as subTypHousng ON subTypHousng.id = typHousngMap.sub_type_of_housing_id where typHousngMap.project_id = " + dataArrObj.project_id;
                        //======================[find all constrtnStgMapggn of projects]=============

                        Projects.dataSource.connector.query(subtypeOfHousingQuery, (err, subTypOfHousngRslt) => {
                            //    ConstructionStageMappingModel.find({ where: { project_id: project.project_id } }, function(err, subTypOfHousngRslt) {
                            if (!err) {
                                if (subTypOfHousngRslt.length > 0) {
                                    projectResult.sub_type_of_housing = subTypOfHousngRslt[0].sub_type_of_housing;
                                }

                                callback();
                            } else {
                                callback();
                            }
                        });
                    });

                    asyncTasks.push((callback) => {
                        ProjectsResultArr.push(projectResult);
                        callback();
                    });


                }, (endloop) => {
                    // if result is true then every file exists
                    //cb("",ProjectsResultArr);
                    projectCallback();
                });


                //execute the functioins inside asyncTasks array in parallelLimit of 1
                async.parallelLimit(asyncTasks, 1, function(err, result) {
                    cb("", ProjectsResultArr); //Remote method call back
                });
            } else {
                cb(err, result);
            }
        });
    }

    Projects.remoteMethod('getProjects', {
        http: { path: '/getProjects', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });


    Projects.getProjectsCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from projects pro left join [User] u on u.id = pro.contractor_id left join municipality mu on mu.id = pro.municipality_id where 1=1 ";
        var bookArr = [];
        for (var o in dataArrObj) {
            if (o == "created_date" && dataArrObj[o] != "") {
                selectQuery += " AND pro." + o + " >= (?)";
                bookArr.push(dataArrObj[o]);
            } else if (o == "updated_date") {
                selectQuery += " AND pro." + o + " > (?)";
                bookArr.push(dataArrObj[o]);
            } else if (o == "project_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND pro." + o + " Like (?)";
                    bookArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND pro." + o + " = (?)";
                    bookArr.push(dataArrObj[o]);
                }
            }
        }

        Projects.dataSource.connector.query(selectQuery, bookArr, (err, result) => {
            cb(err, result);

        });
    }

    Projects.remoteMethod('getProjectsCount', {
        http: { path: '/getProjectsCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });
};