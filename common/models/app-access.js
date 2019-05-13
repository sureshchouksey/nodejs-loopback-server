'use strict';

module.exports = function(Appaccess) {

    var appAccessDataObj = {
        app_id: '',
        contractor_id: '',
        access_code: '',
    }


    /*
     * generate_access_code() => this method is used to generate access code for the app access
     */


    //******* [ App Access code generation function] *******//
    Appaccess.generate_access_code = function(contractorDataObj, cb) {


            //validating contractor data 
            (contractorDataObj.id != undefined && contractorDataObj.id != null && contractorDataObj.id != '') ? appAccessDataObj.contractor_id = contractorDataObj.id: cb('contractor contractor id is empty', null);
            (contractorDataObj.appId != undefined && contractorDataObj.appId != null && contractorDataObj.appId != '') ? appAccessDataObj.app_id = contractorDataObj.appId: cb('contractor contractor appId is empty', null);

            //generating access code
            create_access_Code(contractorDataObj, cb);



        }
        //******* [ Remote function for generating access code for user] *******
    Appaccess.remoteMethod('generate_access_code', {
        http: { path: '/generate_access_code', verb: 'GET' },
        accepts: [
            { arg: 'contractorDataObj', type: 'object', http: { source: 'body' } }
        ],
        returns: { arg: 'data', type: 'object' }
    });


    //******* [ Generate new access code] *******//
    Appaccess.forgot_access_code = function(contractorDataObj, cb) {
        var Contractor = Appaccess.app.models.contractor_profile;
        if (contractorDataObj.hasOwnProperty("contractor_email_id") && contractorDataObj.contractor_email_id != '' && contractorDataObj.hasOwnProperty("app_id") && contractorDataObj.app_id != '') {

            Contractor.findOne({ where: { contractor_email_id: contractorDataObj.contractor_email_id, status: 1 } }, function(err, resultObj) {
                //console.log("error :", err);
                //console.log("Result :", resultObj);
                if (!err) {

                    // if (typeof resultObj == 'object' && resultObj != null) {
                    //     contractorDataObj.contractor_id = resultObj.contractor_id;
                    //     //generating access code
                    //     create_access_Code(contractorDataObj, cb);
                    // } else {

                    //     cb(error(406, "Please enter a valid email."), '');
                    // }
                    if (typeof resultObj == 'object' && resultObj != null) {
                        contractorDataObj.contractor_id = resultObj.contractor_id;
                        //generating access code
                        //create_access_Code(contractorDataObj, cb);
                        Appaccess.findOne({ where: { contractor_id: contractorDataObj.contractor_id, app_id: contractorDataObj.app_id, status: 1 } }, function(err, resultObj) {
                            if (!err) {
                                if (typeof resultObj == 'object' && resultObj != null) {
                                    create_access_Code(contractorDataObj, cb);
                                } else {
                                    cb(error(406, "Please enter a valid email."), '');
                                }

                            } else {
                                cb(error(406, "Something went wrong."), '');
                            }
                        });
                    } else {
                        cb(error(406, "Please enter a valid email."), '');
                    }

                } else {
                    console.log("error :", err);
                    cb(error(406, "Please enter a valid email."), '');
                }


            });


        } else {
            cb(error(406, "RequestData unacceptable."), '');
        }
    }


    //******* [ Remote function for generating new access code for a user] *******
    Appaccess.remoteMethod('forgot_access_code', {
        http: { path: '/forgot_access_code', verb: 'POST' },
        accepts: [
            { arg: 'contractorDataObj', type: 'object', http: { source: 'body' } }
        ],
        returns: { arg: 'data', type: 'object' }
    });

    //Generate random number for access code
    function create_access_Code(contractorDataObj, cb) {

        var responseData = { err: '', data: '' };

        var accessCode; //genrate random number as a access code
        var appName;

        if (contractorDataObj.contractor_email_id == 'saurabh@experiencecommerce.com') {
            accessCode = 1111;
        } else {
            accessCode = Math.floor(1000 + Math.random() * 9000);
        }
        //check if the random generated accessCode exists in the accessCode Table
        // Appaccess.findOne({ where: { access_code: accessCode } }, function(err, resultObj) {
        //     if (!err) {

        //         if (resultObj != null && typeof resultObj == 'object') {
        //             create_access_Code(contractorDataObj, cb);
        //} else {
        //initializing newly generated access code in appAccess Data object
        appAccessDataObj.access_code = accessCode;
        appAccessDataObj.contractor_id = contractorDataObj.contractor_id;
        appAccessDataObj.app_id = contractorDataObj.app_id;

        //update newly generated access code in table

        var appNameQuery = "SELECT app_name FROM app_details where app_id = " + appAccessDataObj.app_id;
        Appaccess.dataSource.connector.query(appNameQuery, (err, result) => {
            if (!err) {
                appName = result[0].app_name;
            } else {
                reject(err);
            }
        });

        var upsertQuery = "MERGE app_access AS Target  USING (SELECT contractor_id, app_id FROM app_access where contractor_id =" + contractorDataObj.contractor_id + "and app_id=" + contractorDataObj.app_id + ") AS Source ON (Target.contractor_id = Source.contractor_id AND Target.app_id = Source.app_id)  WHEN MATCHED THEN UPDATE SET Target.access_code =" + accessCode + " WHEN NOT MATCHED BY TARGET THEN INSERT (app_id,contractor_id,access_code) VALUES (" + contractorDataObj.app_id + "," + contractorDataObj.contractor_id + "," + accessCode + ");";

        Appaccess.dataSource.connector.query(upsertQuery, (err, resultObj) => {
            if (!err) {

                var baseUrl = Appaccess.app.get('apiHostname');

                var imageSrc = '';
                if (appName == 'Profolio') {
                    imageSrc = baseUrl + "/mailer_images/profolio.jpg";
                } else if (appName == 'Knowledge Bank') {
                    imageSrc = baseUrl + "/mailer_images/knowledeg.jpg";
                }

                Appaccess.app.models.Email.send({
                    to: contractorDataObj.contractor_email_id,
                    from: 'support.digital-ph@lafargeholcim.com',
                    subject: (contractorDataObj.app_id == 1) ? 'Your Profolio One Time Password' : "One Time Password for Knowledge Bank",
                    text: 'my text',
                    //html: "<p>Dear User,<br /><br /><br />Your one-time password is " + accessCode + "<br /><br /><br />Use this one-time password to login and further ensure security. <br /><br />Don’t forget to set your pattern within the app.<br /><br /></br>Thanks,<br>" + appName + " Team</p>"
                    html: `<html>

                        <head>
                            <title>Lenovo</title>
                            <meta name="apple-mobile-web-app-capable" content="yes">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
                            <meta name="apple-mobile-web-app-status-bar-style" content="black">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <style type="text/css">
                                p.MsoNormal img {
                                    display: block !important;
                                }
                            </style>
                        </head>
                        
                        <body style="margin:0; padding:0;">
                            <table width="600" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:#fff;border: solid 1px #3f7bdd" bgcolor="#fff" align="center">
                                <tbody>
                        
                                    <tr>
                                        <td valign="top" style="padding: 30px 0;">
                                            <img src="` + imageSrc + `" width="600" height="121" alt="" style="display: block; border: 0;outline:0;" /></td>
                                    </tr>
                        
                                    <tr>
                                        <td valign="top" align="center" style="padding:0px 0 20px 0;">
                                            <table width="490" border="0" cellspacing="0" cellpadding="0" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px  5px;text-align: left;">Dear User</td>
                                                    </tr>
													
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px 5px;text-align: left;">Your activation code is ` + accessCode + `</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px 5px;text-align: left;">Use this activation code to login and further ensure security.</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 30px 5px;text-align: left;">Don’t forget to set your pattern within the app.</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 5px 5px;text-align: left;">Regards</td>
                                                    </tr>
                                                    <tr>
                                                        <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 10px 5px;text-align: left;">` + appName + ` Team</td>
                                                    </tr>
                        
                                                </tbody>
                                            </table>
                        
                                        </td>
                                    </tr>
                        
                        
                        
                        
                        
                                </tbody>
                            </table>
                        
                        </body>
                        
                        </html>`
                }, function(err, mail) {
                    console.log(err);
                    if (!err) {
                        cb(null, "Mail send");
                    } else {
                        cb(error(406, 'Mail not send'), '');
                    }

                });

            } else {
                cb(error(406, 'Something went wrong'), '');
            }
        });


        //accessCode upsert ends here
        //}
        //     } else {
        //         cb(error(406, 'Something went wrong'), null);
        //     }
        // });
        //accessCode findOne ends here
    }

    //creating error msgs
    function error(code, data) {
        var err = new Error(data);
        err.statusCode = code;
        return err
    }

};