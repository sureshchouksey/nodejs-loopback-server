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


    Appaccess.forgot_access_code = function(contractorDataObj, cb) {
        var Contractor = Appaccess.app.models.contractor_profile;
        if (contractorDataObj.hasOwnProperty("contractor_email_id") && contractorDataObj.contractor_email_id != '' && contractorDataObj.hasOwnProperty("app_id") && contractorDataObj.app_id != '') {

            Contractor.findOne({ where: { contractor_email_id: contractorDataObj.contractor_email_id, status: 1 } }, function(err, resultObj) {
                console.log("error :", err);
                console.log("Result :", resultObj);
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
        var accessCode = Math.floor(1000 + Math.random() * 9000); //genrate random number as a access code

        //check if the random generated accessCode exists in the accessCode Table
        Appaccess.findOne({ where: { access_code: accessCode } }, function(err, resultObj) {
            if (!err) {

                if (resultObj != null && typeof resultObj == 'object') {
                    create_access_Code(contractorDataObj, cb);
                } else {
                    //initializing newly generated access code in appAccess Data object
                    appAccessDataObj.access_code = accessCode;
                    appAccessDataObj.contractor_id = contractorDataObj.contractor_id;
                    appAccessDataObj.app_id = contractorDataObj.app_id;

                    //update newly generated access code in table

                    var upsertQuery = "MERGE app_access AS Target  USING (SELECT contractor_id, app_id FROM app_access where contractor_id =" + contractorDataObj.contractor_id + "and app_id=" + contractorDataObj.app_id + ") AS Source ON (Target.contractor_id = Source.contractor_id AND Target.app_id = Source.app_id)  WHEN MATCHED THEN UPDATE SET Target.access_code =" + accessCode + " WHEN NOT MATCHED BY TARGET THEN INSERT (app_id,contractor_id,access_code) VALUES (" + contractorDataObj.app_id + "," + contractorDataObj.contractor_id + "," + accessCode + ");";

                    Appaccess.dataSource.connector.query(upsertQuery, (err, resultObj) => {
                        if (!err) {


                            Appaccess.app.models.Email.send({
                                to: contractorDataObj.contractor_email_id,
                                from: 'no-reply@gmail.com',
                                subject: 'Your one time password!',
                                text: 'my text',
                                html: "<p>Hi,<br /><br /><br />Please use the below one time password to login:<br /><br /><br />" + accessCode + "<br /><br /><br />Once you use this option, don’t forget to set your pattern in the app.<br /><br /><br />Thanks,<br>Profolio App Team</p>"
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
                }
            } else {
                cb(error(406, 'Something went wrong'), null);
            }
        });
        //accessCode findOne ends here
    }

    //creating error msgs
    function error(code, data) {
        var err = new Error(data);
        err.statusCode = code;
        return err
    }

};