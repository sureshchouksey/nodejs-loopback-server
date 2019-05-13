'use strict';

module.exports = function(Equipmentsmaster) {

    //getting data of equipments with count of contractor used the equipment
    Equipmentsmaster.getEquipment = function(dataArrObj, cb) {
        var selectQuery = "select eqp.equipment_id,eqp.equipment_name,eqp.created_date,eqp.updated_date,eqp.status,count(contractor.contractor_id) as total from equipments_master as eqp left join equipments_mapping as eqpMap on eqpMap.equipment_id = eqp.equipment_id left Join contractor_profile as contractor on contractor.contractor_id = eqpMap.contractor_id where 1=1 ";
        var eqpmntArr = [];
        for (var o in dataArrObj) {
            if (o == "equipment_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND eqp." + o + " Like (?)";
                    eqpmntArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND eqp." + o + " Like (?)";
                    eqpmntArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND eqp." + o + " = (?)";
                    eqpmntArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += " group by eqp.equipment_id,eqp.equipment_name,eqp.created_date,eqp.updated_date,eqp.status ORDER BY eqp.equipment_id DESC OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            eqpmntArr.push(offset, dataArrObj['limit']);
        } else {
            selectQuery += " group by eqp.equipment_id,eqp.equipment_name,eqp.created_date,eqp.updated_date,eqp.status";
        }

        Equipmentsmaster.dataSource.connector.query(selectQuery, eqpmntArr, (err, result) => {
            cb(err, result);
        });
    }

    Equipmentsmaster.remoteMethod('getEquipment', {
        http: { path: '/getEquipment', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Equipment count
    Equipmentsmaster.getEquipmentCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from equipments_master as eqp where 1=1 ";
        var eqpmntArr = [];
        for (var o in dataArrObj) {

            if (o == "equipment_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND eqp." + o + " Like (?)";
                    eqpmntArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND eqp." + o + " Like (?)";
                    eqpmntArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND eqp." + o + " = (?)";
                    eqpmntArr.push(dataArrObj[o]);
                }
            }
        }

        Equipmentsmaster.dataSource.connector.query(selectQuery, eqpmntArr, (err, result) => {
            cb(err, result);
        });
    }

    Equipmentsmaster.remoteMethod('getEquipmentCount', {
        http: { path: '/getEquipmentCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Equipment name count
    Equipmentsmaster.getEquipmentCountName = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from equipments_master as eqp where 1=1 ";
        var eqpmntArr = [];
        for (var o in dataArrObj) {

            if (o == "equipment_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND eqp." + o + " = '" + dataArrObj[o] + "'";
                    //eqpmntArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != undefined && dataArrObj[o] != null && !isNaN(dataArrObj[o])) {
                    selectQuery += " AND eqp." + o + " Like (?)";
                    eqpmntArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND eqp." + o + " = (?)";
                    eqpmntArr.push(dataArrObj[o]);
                }
            }
        }

        Equipmentsmaster.dataSource.connector.query(selectQuery, eqpmntArr, (err, result) => {
            cb(err, result);
        });
    }

    Equipmentsmaster.remoteMethod('getEquipmentCountName', {
        http: { path: '/getEquipmentCountName', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });
};