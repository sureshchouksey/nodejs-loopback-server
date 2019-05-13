'use strict';

module.exports = function(Constructionstagemaster) {

    //getting data of Construction Stage with count of projects used the Construction Stage
    Constructionstagemaster.getConstructionStage = function(dataArrObj, cb) {
        var selectQuery = "select const.construction_stage_id,const.construction_stage_name,const.created_date,const.updated_date,const.status,const.project_status,count(projt.project_id) as usedProjects from construction_stage_master as const left join construction_stage_mapping as constMap on constMap.construction_stage_id = const.construction_stage_id left join projects as projt on projt.project_id = constMap.project_id where 1 = 1";
        var constrctArr = [];
        for (var o in dataArrObj) {
            if (o == "construction_stage_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND const." + o + " Like (?)";
                    constrctArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND const." + o + " Like (?)";
                    constrctArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND const." + o + " = (?)";
                    constrctArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += " group by const.construction_stage_id,const.construction_stage_name,const.created_date,const.updated_date,const.status,const.project_status ORDER BY const.construction_stage_id DESC OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            constrctArr.push(offset, dataArrObj['limit']);
        } else {
            selectQuery += " group by const.construction_stage_id,const.construction_stage_name,const.created_date,const.updated_date,const.status,const.project_status";
        }

        Constructionstagemaster.dataSource.connector.query(selectQuery, constrctArr, (err, result) => {
            cb(err, result);
        });
    }

    Constructionstagemaster.remoteMethod('getConstructionStage', {
        http: { path: '/getConstructionStage', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Construction Stage count
    Constructionstagemaster.getConstructionStageCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from construction_stage_master as const where 1=1 ";
        var constrctnStgArr = [];
        for (var o in dataArrObj) {

            if (o == "construction_stage_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND const." + o + " Like (?)";
                    constrctnStgArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND const." + o + " Like (?)";
                    constrctnStgArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND const." + o + " = (?)";
                    constrctnStgArr.push(dataArrObj[o]);
                }
            }
        }

        Constructionstagemaster.dataSource.connector.query(selectQuery, constrctnStgArr, (err, result) => {
            cb(err, result);
        });
    }

    Constructionstagemaster.remoteMethod('getConstructionStageCount', {
        http: { path: '/getConstructionStageCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Construction Stage count
    Constructionstagemaster.getConstructionStageCountName = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from construction_stage_master as const where 1=1 ";
        var constrctnStgArr = [];
        for (var o in dataArrObj) {

            if (o == "construction_stage_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND const." + o + " = '" + dataArrObj[o] + "'";
                    //constrctnStgArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != undefined && dataArrObj[o] != null && !isNaN(dataArrObj[o])) {
                    selectQuery += " AND const." + o + " Like (?)";
                    constrctnStgArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND const." + o + " = (?)";
                    constrctnStgArr.push(dataArrObj[o]);
                }
            }
        }

        Constructionstagemaster.dataSource.connector.query(selectQuery, constrctnStgArr, (err, result) => {
            cb(err, result);
        });
    }

    Constructionstagemaster.remoteMethod('getConstructionStageCountName', {
        http: { path: '/getConstructionStageCountName', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });
};