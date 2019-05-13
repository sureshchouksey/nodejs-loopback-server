'use strict';

module.exports = function(Typeofhousingmaster) {

    //getting data of Type of housing with count of projects used the Type of housing
    Typeofhousingmaster.getTypeOfHousingStage = function(dataArrObj, cb) {
        var selectQuery = "select typHsMstr.id,typHsMstr.type_of_housing,typHsMstr.created_date,typHsMstr.updated_date,typHsMstr.status,count(typeHsMap.id) as usedProject from type_of_housing_master as typHsMstr left join type_of_housing_mapping as typeHsMap on  typeHsMap.type_of_housing_id = typHsMstr.id where 1 = 1";
        var constrctArr = [];
        for (var o in dataArrObj) {
            if (o == "type_of_housing") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND typHsMstr." + o + " Like (?)";
                    constrctArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND typHsMstr." + o + " Like (?)";
                    constrctArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND typHsMstr." + o + " = (?)";
                    constrctArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += " group by typHsMstr.id,typHsMstr.type_of_housing,typHsMstr.created_date,typHsMstr.updated_date,typHsMstr.status ORDER BY typHsMstr.id DESC OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            constrctArr.push(offset, dataArrObj['limit']);
        } else {
            selectQuery += " group by typHsMstr.id,typHsMstr.type_of_housing,typHsMstr.created_date,typHsMstr.updated_date,typHsMstr.status";
        }


        Typeofhousingmaster.dataSource.connector.query(selectQuery, constrctArr, (err, result) => {
            cb(err, result);
        });
    }

    Typeofhousingmaster.remoteMethod('getTypeOfHousingStage', {
        http: { path: '/getTypeOfHousingStage', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Type of housing count
    Typeofhousingmaster.getTypeOfHousingStageCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from type_of_housing_master as typHsMstr where 1=1 ";
        var provinceArr = [];
        for (var o in dataArrObj) {

            if (o == "type_of_housing") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND typHsMstr." + o + " Like (?)";
                    provinceArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND typHsMstr." + o + " Like (?)";
                    provinceArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND typHsMstr." + o + " = (?)";
                    provinceArr.push(dataArrObj[o]);
                }
            }
        }

        //console.log("TypeOgHousing Query ", selectQuery);
        Typeofhousingmaster.dataSource.connector.query(selectQuery, provinceArr, (err, result) => {
            cb(err, result);
        });
    }

    Typeofhousingmaster.remoteMethod('getTypeOfHousingStageCount', {
        http: { path: '/getTypeOfHousingStageCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Type of housing name count
    Typeofhousingmaster.getTypeOfHousingStageCountName = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from type_of_housing_master as typHsMstr where 1=1 ";
        var provinceArr = [];
        for (var o in dataArrObj) {

            if (o == "type_of_housing") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND typHsMstr." + o + " = '" + dataArrObj[o] + "'";
                    //provinceArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != undefined && dataArrObj[o] != null && !isNaN(dataArrObj[o])) {
                    selectQuery += " AND typHsMstr." + o + " Like (?)";
                    provinceArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND typHsMstr." + o + " = (?)";
                    provinceArr.push(dataArrObj[o]);
                }
            }
        }

        //console.log("TypeOgHousing Query ", selectQuery);
        Typeofhousingmaster.dataSource.connector.query(selectQuery, provinceArr, (err, result) => {
            cb(err, result);
        });
    }

    Typeofhousingmaster.remoteMethod('getTypeOfHousingStageCountName', {
        http: { path: '/getTypeOfHousingStageCountName', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

};