'use strict';
module.exports = function(Appusers) {

    Appusers.getUserRole = function(accesstoken, cb) {

        var selectQuery = " select r.*, u.realm, u.id as uId from [AccessToken] at join RoleMapping rm on at.userId = rm.principalId join Role r on r.id = rm.roleId join [User] u on u.id = rm.principalId WHERE 1=1  AND  at.id = (?) ORDER BY at.id DESC OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY";
        var dataArr = [accesstoken];

        Appusers.dataSource.connector.query(selectQuery, dataArr, (err, result) => {
            cb(err, result);
        });
    }

    Appusers.remoteMethod('getUserRole', {
        http: { path: '/getUserRole', verb: 'get' },
        accepts: [
            { arg: 'accesstoken', type: 'string' }
        ],
        returns: { arg: 'result', type: 'object' }
    });

}