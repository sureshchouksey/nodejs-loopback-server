'use strict';

module.exports = function(City) {
    //Functions to fetch City
    City.getProvince = function(dataArrObj, cb) {
        var selectQuery = "Select city.city_id,city.city_name,city.status ,count(projects.project_id) as usedCount ,count(contractor.contractor_id) as usedContractor from city left join projects on city.city_id=projects.city_id left join contractor_profile as contractor on city.city_id = contractor.city_id where 1=1 ";
        var provinceArr = [];
        for (var o in dataArrObj) {
            if (o == "city_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND city." + o + " Like (?)";
                    provinceArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND city." + o + " Like (?)";
                    provinceArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND city." + o + " = (?)";
                    provinceArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += " group by city.city_id,city.city_name,city.status ORDER BY city.city_id DESC OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            provinceArr.push(offset, dataArrObj['limit']);
        } else {
            selectQuery += " group by city.city_id,city.city_name,city.status";
        }
        //console.log("selectQuery :", selectQuery);
        City.dataSource.connector.query(selectQuery, provinceArr, (err, result) => {
            cb(err, result);
        });
    }

    City.remoteMethod('getProvince', {
        http: { path: '/getProvince', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch books
    City.getProvinceCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from city where 1=1 ";
        var provinceArr = [];
        for (var o in dataArrObj) {
            // if (o == "created_at") {
            //     selectQuery += " AND city." + o + " >= (?)";
            //     provinceArr.push(dataArrObj[o]);
            // } else if (o == "updated_at") {
            //     selectQuery += " AND city." + o + " > (?)";
            //     provinceArr.push(dataArrObj[o]);
            // } else 
            if (o == "city_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND city." + o + " Like (?)";
                    provinceArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND city." + o + " Like (?)";
                    provinceArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND city." + o + " = (?)";
                    provinceArr.push(dataArrObj[o]);
                }
            }
        }

        City.dataSource.connector.query(selectQuery, provinceArr, (err, result) => {
            cb(err, result);
        });
    }

    City.remoteMethod('getProvinceCount', {
        http: { path: '/getProvinceCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch municipality as per province
    City.getProvinceNameCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from city where 1=1 ";
        var provinceArr = [];
        if (dataArrObj.city_name != undefined && dataArrObj.city_name != null && dataArrObj.city_name != '') {
            var selectQuery = "select count(*) as total from city where 1=1  AND city.city_name = '" + dataArrObj.city_name + "'";

            City.dataSource.connector.query(selectQuery, (err, result) => {
                cb(err, result);
            });

        } else {
            cb('City name not found', null);
        }


    }

    City.remoteMethod('getProvinceNameCount', {
        http: { path: '/getProvinceNameCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch municipality as per province
    City.getMunicipalityCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from city where 1=1 ";
        var provinceArr = [];
        if (dataArrObj.city_id != undefined && dataArrObj.city_id != null && dataArrObj.city_id != '') {
            var selectQuery = "SELECT count(*) as total from municipality WHERE city_id = " + dataArrObj.city_id;

            City.dataSource.connector.query(selectQuery, (err, result) => {
                cb(err, result);
            });

        } else {
            cb('City name not found', null);
        }


    }

    City.remoteMethod('getMunicipalityCount', {
        http: { path: '/getMunicipalityCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });
};