'use strict';
module.exports = function(Applogin) {
    Applogin.getUserDetails = function(credentials, fn) {
        var self = this,
            defaultError = new Error('login failed');
        defaultError.statusCode = 401;
        defaultError.code = 'LOGIN_FAILED';
        var UserModel = Applogin.app.models.User;
        // if username is missing
        if ((!credentials.email)) {
            return fn(defaultError);
        }

        var creds = {};
        if (credentials.email) {
            var sqlQuery = "select u.*, r.name as role from [User] u left join RoleMapping rm on rm.principalId = u.id left join Role r on rm.roleId = r.id where u.email = (?)";

            Applogin.dataSource.connector.query(sqlQuery, [credentials.email], (err, userData) => {
                //console.log("userData", userData);
                if (userData && userData[0]['role'] == 'Admin' && userData.length > 0) {
                    UserModel.findOne({ where: { email: userData[0]['email'] } }, function(err, user) {
                        if (err) return fn(err);
                        if (!user) return fn(defaultError);
                        user.createAccessToken(1209600, function(err, token) {
                            if (err) return fn(err);
                            token.__data.user = user;
                            token.__data.user.roles = userData[0]['role'];
                            token['rememberMe'] = true;
                            //console.log("token", token);

                            fn(err, token);
                        });
                    });
                } else {
                    return fn(defaultError);
                }
            });
        }
    };

    Applogin.remoteMethod('getUserDetails', {
        http: { path: '/getUserDetails', verb: 'post' },
        accepts: [
            { arg: 'credentials', type: 'object', required: true, http: { source: 'body' } }
        ],
        returns: {
            arg: 'result',
            type: 'object',
            root: true,
            description: 'Return Params'
        }
    });


    Applogin.userResetOrForgotPassActionCheckReq = function(credentials, fn) {
        var UserModal = Applogin.app.models.User;
        if (credentials['email'] && credentials['email'] != '') {
            var config = require('../../server/config.json');
            var path = require('path');
            var selectQuery = "select u.id, u.realm,u.email,r.name as rolename from [User] u join RoleMapping rm on rm.principalid = u.id join Role r on rm.roleId = r.id where u.email = (?) ";

            Applogin.dataSource.connector.query(selectQuery, [credentials.email], (err, userData) => {
                //console.log("userData", userData);
                //Forget password for EAP Users
                if (credentials.role == 'Admin') {
                    if (userData && userData.length > 0 && userData[0].rolename == 'Admin') {
                        UserModal.findOne({ where: { "and": [{ email: userData[0]['email'] }, { status: 1 }] } }, function(err, user) {
                            if (user) {
                                //accesstoken for a day
                                user.createAccessToken(600, function(err, token) {
                                    //console.log("token", token);
                                    var fromEmail = 'support.digital-ph@lafargeholcim.com';
                                    var toEmail = credentials.email;
                                    // var url = config.dashboardUrl + '/password-reset';
                                    var html = ` 
                                        <p>Dear Admin,</p>
                                        <p>This is an auto generated email please do not reply,</p>
                                        <p>We have reset your account's password. Please use this link address bellow to reset your password:</p>
                                        <a href="${config.dashboardUrl}/password-reset/${token.id}">Click Here</a><br />
                                        <p>Many thanks.</p>
                                        `;

                                    Applogin.app.models.Email.send({
                                        to: toEmail,
                                        from: fromEmail,
                                        subject: 'Philippines Dashboard Reset Passcode',
                                        text: '',
                                        html: html
                                    }, function(err, mail) {
                                        //console.log('email sent!', err, mail);
                                    });

                                    fn(err, { status: true, message: "Verification link sent to your email id" });
                                });
                            } else {
                                fn(err, { status: false, message: 'Invalid email id' });
                            }
                        });
                    } else {
                        fn(err, { status: false, message: 'Invalid email id' });
                    }
                }
            });
        } else {
            fn(null, { status: false, message: 'Field is required' });
        }
    }

    Applogin.remoteMethod('userResetOrForgotPassActionCheckReq', {
        http: { path: '/userResetOrForgotPassActionCheckReq', verb: 'post' },
        accepts: [
            { arg: 'credentials', type: 'object', required: true, http: { source: 'body' } }
        ],
        returns: {
            arg: 'response',
            type: 'object',
            root: true,
            description: 'Return Params'
        }
    });

    Applogin.userResetOrForgotPassChange = function(credentials, fn) {
        if (credentials.password) {
            var UserModal = Applogin.app.models.User;
            //console.log("password", credentials.password);
            let new_password = UserModal.hashPassword(credentials.password);
            //console.log("new_password", new_password);
            var sqlQuery = "delete from AccessToken where id = (?)";
            Applogin.dataSource.connector.query(sqlQuery, [credentials.token], (err, result) => {
                var sqlQuery = "UPDATE [User] SET password = (?) OUTPUT INSERTED.id WHERE id = (?)";
                Applogin.dataSource.connector.query(sqlQuery, [new_password, credentials.id], (err, result) => {
                    fn(err, result);
                });
            });
        } else {
            fn(null, "Invalid input");
        }
    }

    Applogin.remoteMethod('userResetOrForgotPassChange', {
        http: { path: '/userResetOrForgotPassChange', verb: 'post' },
        accepts: [
            { arg: 'credentials', type: 'object', required: true, http: { source: 'body' } }
        ],
        returns: {
            arg: 'response',
            type: 'object',
            root: true,
            description: 'Return Params'
        }
    });

    Applogin.userResetOrForgotPassVerify = function(credentials, fn) {
        //console.log("Come here");
        var selectQuery = "select r.*, u.realm, u.id as uId from [AccessToken] at join RoleMapping rm on at.userId = rm.principalId join Role r on r.id = rm.roleId join [User] u on u.id = rm.principalId WHERE 1=1  AND  at.id = (?) AND (GETDATE() < DATEADD(SECOND,at.ttl,at.created)) ORDER BY at.id DESC OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY ";
        var dataArr = [credentials.token];
        Applogin.dataSource.connector.query(selectQuery, dataArr, (err, result) => {
            //console.log("Come here", result);
            fn(err, result);
        });
    }

    Applogin.remoteMethod('userResetOrForgotPassVerify', {
        http: { path: '/userResetOrForgotPassVerify', verb: 'post' },
        accepts: [
            { arg: 'credentials', type: 'object', required: true, http: { source: 'body' } }
        ],
        returns: {
            arg: 'response',
            type: 'object',
            root: true,
            description: 'Return Params'
        }
    });
};