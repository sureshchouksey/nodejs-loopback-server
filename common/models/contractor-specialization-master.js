'use strict';

module.exports = function(Contractorspecializationmaster) {

    //getting data of Specialization with count of contractor used the Specialization
    Contractorspecializationmaster.getSpecialization = function(dataArrObj, cb) {
        var selectQuery = "select speclz.specialization_id,speclz.specialization_name,speclz.created_date,speclz.updated_date,speclz.status,count(contractor.contractor_id) as usedCount from contractor_specialization_master as speclz left join contractor_specialization_mapping as speclzMap on speclzMap.specialization_id = speclz.specialization_id left Join contractor_profile as contractor on contractor.contractor_id = speclzMap.contractor_id where 1=1";
        var specializationArr = [];
        for (var o in dataArrObj) {
            if (o == "specialization_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND speclz." + o + " Like (?)";
                    specializationArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND speclz." + o + " Like (?)";
                    specializationArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND speclz." + o + " = (?)";
                    specializationArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += " group by speclz.specialization_id,speclz.specialization_name,speclz.created_date,speclz.updated_date,speclz.status ORDER BY speclz.specialization_id DESC OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            specializationArr.push(offset, dataArrObj['limit']);
        } else {
            selectQuery += " group by speclz.specialization_id,speclz.specialization_name,speclz.created_date,speclz.updated_date,speclz.status";
        }

        Contractorspecializationmaster.dataSource.connector.query(selectQuery, specializationArr, (err, result) => {
            cb(err, result);
        });
    }

    Contractorspecializationmaster.remoteMethod('getSpecialization', {
        http: { path: '/getSpecialization', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Specialization count
    Contractorspecializationmaster.getSpecializationCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from contractor_specialization_master as speclz where 1=1 ";
        var specializationArr = [];
        for (var o in dataArrObj) {

            if (o == "specialization_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND speclz." + o + " Like (?)";
                    specializationArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND speclz." + o + " Like (?)";
                    specializationArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND speclz." + o + " = (?)";
                    specializationArr.push(dataArrObj[o]);
                }
            }
        }

        Contractorspecializationmaster.dataSource.connector.query(selectQuery, specializationArr, (err, result) => {
            cb(err, result);
        });
    }

    Contractorspecializationmaster.remoteMethod('getSpecializationCount', {
        http: { path: '/getSpecializationCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Specialization name count
    Contractorspecializationmaster.getSpecializationCountName = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from contractor_specialization_master as speclz where 1=1 ";
        var specializationArr = [];
        for (var o in dataArrObj) {

            if (o == "specialization_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND speclz." + o + " = '" + dataArrObj[o] + "'";
                    //specializationArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != undefined && dataArrObj[o] != null && !isNaN(dataArrObj[o])) {
                    selectQuery += " AND speclz." + o + " Like (?)";
                    specializationArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND speclz." + o + " = (?)";
                    specializationArr.push(dataArrObj[o]);
                }
            }
        }

        //console.log("dataArrObj :", dataArrObj);
        //console.log("name match query :", selectQuery);
        Contractorspecializationmaster.dataSource.connector.query(selectQuery, specializationArr, (err, result) => {
            cb(err, result);
        });
    }

    Contractorspecializationmaster.remoteMethod('getSpecializationCountName', {
        http: { path: '/getSpecializationCountName', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

};