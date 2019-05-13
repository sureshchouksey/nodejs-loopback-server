'use strict';

module.exports = function(SubTypeofhousingmaster) {

    // function to get sub type of housing data with the count of project used this sub type of housing
    SubTypeofhousingmaster.getSubTypOfHousing = function(dataArrObj, cb) {
        var selectQuery = "Select subtypeOfHusngMas.id, subtypeOfHusngMas.parent_id, subtypeOfHusngMas.name, subtypeOfHusngMas.created_at,subtypeOfHusngMas.updated_at, subtypeOfHusngMas.status,typeOfHusngMas.type_of_housing,count(typeOfHusngMap.project_id) as usedProjects from sub_type_of_housing_master as subtypeOfHusngMas left join type_of_housing_mapping as typeOfHusngMap on typeOfHusngMap.sub_type_of_housing_id = subtypeOfHusngMas.id left join type_of_housing_master as typeOfHusngMas on typeOfHusngMas.id = subtypeOfHusngMas.parent_id where 1=1";
        var subTypHousingArr = [];
        for (var o in dataArrObj) {
            if (o == "name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND subtypeOfHusngMas." + o + " Like (?)";
                    subTypHousingArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND subtypeOfHusngMas." + o + " Like (?)";
                    subTypHousingArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND subtypeOfHusngMas." + o + " = (?)";
                    subTypHousingArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += " group by subtypeOfHusngMas.id, subtypeOfHusngMas.parent_id, subtypeOfHusngMas.name, subtypeOfHusngMas.created_at, subtypeOfHusngMas.updated_at, subtypeOfHusngMas.status,typeOfHusngMas.type_of_housing ORDER BY subtypeOfHusngMas.id DESC OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            subTypHousingArr.push(offset, dataArrObj['limit']);
        } else {
            selectQuery += " group by subtypeOfHusngMas.id, subtypeOfHusngMas.parent_id, subtypeOfHusngMas.name, subtypeOfHusngMas.created_at, subtypeOfHusngMas.updated_at, subtypeOfHusngMas.status,typeOfHusngMas.type_of_housing";
        }

        SubTypeofhousingmaster.dataSource.connector.query(selectQuery, subTypHousingArr, (err, result) => {
            cb(err, result);
        });
    }

    SubTypeofhousingmaster.remoteMethod('getSubTypOfHousing', {
        http: { path: '/getSubTypOfHousing', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch sub type of housing count
    SubTypeofhousingmaster.getSubTypOfHousngCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from sub_type_of_housing_master as subtypeOfHusngMas where 1=1 ";
        var subTypOhHousngArr = [];
        for (var o in dataArrObj) {
            if (o == "name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND subtypeOfHusngMas." + o + " Like (?)";
                    subTypOhHousngArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND subtypeOfHusngMas." + o + " Like (?)";
                    subTypOhHousngArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND subtypeOfHusngMas." + o + " = (?)";
                    subTypOhHousngArr.push(dataArrObj[o]);
                }
            }
        }


        SubTypeofhousingmaster.dataSource.connector.query(selectQuery, subTypOhHousngArr, (err, result) => {
            cb(err, result);
        });
    }

    SubTypeofhousingmaster.remoteMethod('getSubTypOfHousngCount', {
        http: { path: '/getSubTypOfHousngCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch sub type of housing name count
    SubTypeofhousingmaster.getSubTypOfHousngCountName = function(dataArrObj, cb) {
        var selectQuery = "select count(subtypeOfHusngMas.id) as total from sub_type_of_housing_master as subtypeOfHusngMas where 1=1 ";
        var subTypOhHousngArr = [];
        for (var o in dataArrObj) {
            if (o == "name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND subtypeOfHusngMas." + o + " = '" + dataArrObj[o] + "'";
                    //subTypOhHousngArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != undefined && dataArrObj[o] != null && !isNaN(dataArrObj[o])) {
                    selectQuery += " AND subtypeOfHusngMas." + o + " Like (?)";
                    subTypOhHousngArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND subtypeOfHusngMas." + o + " = (?)";
                    subTypOhHousngArr.push(dataArrObj[o]);
                }
            }
        }

        //console.log("selectQuery :", selectQuery);
        SubTypeofhousingmaster.dataSource.connector.query(selectQuery, subTypOhHousngArr, (err, result) => {
            cb(err, result);
        });
    }

    SubTypeofhousingmaster.remoteMethod('getSubTypOfHousngCountName', {
        http: { path: '/getSubTypOfHousngCountName', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

};