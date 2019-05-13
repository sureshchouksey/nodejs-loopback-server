'use strict';

module.exports = function(Contractoraffiliationmaster) {

    //getting data of Affiliation with count of contractor used the Affiliation
    Contractoraffiliationmaster.getAffiliation = function(dataArrObj, cb) {
        var selectQuery = "select aff.certificate_id,aff.certificate_name,aff.created_date,aff.updated_date,aff.status,count(contractor.contractor_id) as total from contractor_affiliation_master as aff left join contractor_affiliation_mapping as affMap on  affMap.certificate_id = aff.certificate_id left Join contractor_profile as contractor on contractor.contractor_id = affMap.contractor_id where 1=1";
        var affiliatnArr = [];
        for (var o in dataArrObj) {
            if (o == "certificate_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND aff." + o + " Like (?)";
                    affiliatnArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND aff." + o + " Like (?)";
                    affiliatnArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND aff." + o + " = (?)";
                    affiliatnArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += " group by aff.certificate_id,aff.certificate_name,aff.created_date,aff.updated_date,aff.status ORDER BY aff.certificate_id DESC OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            affiliatnArr.push(offset, dataArrObj['limit']);
        } else {
            selectQuery += " group by aff.certificate_id,aff.certificate_name,aff.created_date,aff.updated_date,aff.status";
        }

        Contractoraffiliationmaster.dataSource.connector.query(selectQuery, affiliatnArr, (err, result) => {
            cb(err, result);
        });
    }

    Contractoraffiliationmaster.remoteMethod('getAffiliation', {
        http: { path: '/getAffiliation', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Affiliation count
    Contractoraffiliationmaster.getAffiliationCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from contractor_affiliation_master as aff where 1=1 ";
        var affiliatnArr = [];
        for (var o in dataArrObj) {

            if (o == "certificate_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND aff." + o + " Like (?)";
                    affiliatnArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND aff." + o + " Like (?)";
                    affiliatnArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND aff." + o + " = (?)";
                    affiliatnArr.push(dataArrObj[o]);
                }
            }
        }

        Contractoraffiliationmaster.dataSource.connector.query(selectQuery, affiliatnArr, (err, result) => {
            cb(err, result);
        });
    }

    Contractoraffiliationmaster.remoteMethod('getAffiliationCount', {
        http: { path: '/getAffiliationCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch Affiliation name count
    Contractoraffiliationmaster.getAffiliationCountName = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from contractor_affiliation_master as aff where 1=1 ";
        var affiliatnArr = [];
        for (var o in dataArrObj) {

            if (o == "certificate_name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND aff." + o + " = '" + dataArrObj[o] + "'";
                    //affiliatnArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o == "status") {
                if (dataArrObj[o] != undefined && dataArrObj[o] != null && !isNaN(dataArrObj[o])) {
                    selectQuery += " AND aff." + o + " Like (?)";
                    affiliatnArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND aff." + o + " = (?)";
                    affiliatnArr.push(dataArrObj[o]);
                }
            }
        }

        Contractoraffiliationmaster.dataSource.connector.query(selectQuery, affiliatnArr, (err, result) => {
            cb(err, result);
        });
    }

    Contractoraffiliationmaster.remoteMethod('getAffiliationCountName', {
        http: { path: '/getAffiliationCountName', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

};