'use strict';

module.exports = function(Municipality) {

    // function to get municipallity data with the count of project used this municipality
    Municipality.getMunicipality = function(dataArrObj, cb) {
        var selectQuery = "Select mu.id,mu.name,mu.city_name,mu.city_id,mu.status,mu.created_at,mu.updated_at ,count(projects.project_id) as usedCount from municipality as mu left join projects on mu.id=projects.municipality_id where 1=1 ";
        var provinceArr = [];
        for (var o in dataArrObj) {
            if (o == "name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND mu." + o + " Like (?)";
                    provinceArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND mu." + o + " Like (?)";
                    provinceArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND mu." + o + " = (?)";
                    provinceArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += " group by  mu.id,mu.name,mu.city_name,mu.city_id,mu.status,mu.created_at,mu.updated_at ORDER BY mu.id DESC OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            provinceArr.push(offset, dataArrObj['limit']);
        } else {
            selectQuery += " group by  mu.id,mu.name,mu.city_name,mu.city_id,mu.status,mu.created_at,mu.updated_at";
        }

        Municipality.dataSource.connector.query(selectQuery, provinceArr, (err, result) => {
            cb(err, result);
        });
    }

    Municipality.remoteMethod('getMunicipality', {
        http: { path: '/getMunicipality', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Municipality count
    Municipality.getMunicipalityCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from municipality as mu where 1=1 ";
        var municipalityArr = [];
        for (var o in dataArrObj) {
            // if (o == "created_at") {
            //     selectQuery += " AND city." + o + " >= (?)";
            //     municipalityArr.push(dataArrObj[o]);
            // } else if (o == "updated_at") {
            //     selectQuery += " AND city." + o + " > (?)";
            //     municipalityArr.push(dataArrObj[o]);
            // } else 
            if (o == "name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND mu." + o + " Like (?)";
                    municipalityArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND mu." + o + " Like (?)";
                    municipalityArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND mu." + o + " = (?)";
                    municipalityArr.push(dataArrObj[o]);
                }
            }
        }


        Municipality.dataSource.connector.query(selectQuery, municipalityArr, (err, result) => {
            cb(err, result);
        });
    }

    Municipality.remoteMethod('getMunicipalityCount', {
        http: { path: '/getMunicipalityCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });


};