'use strict';

const legit = require("legit");

module.exports = function(Email) {

    //Functions to fetch send email
    Email.send_email = function(toMailId, fromMailId, subjectText, text, cb) {
        // send an email
        // Email.sendEmail = function(cb) {
        //var baseUrl = Email.app.get('url').replace(/\/$/, '');
        var baseUrl = Email.app.get('apiHostname');
        //console.log("Email model", baseUrl);

        Email.send({
            to: toMailId,
            from: fromMailId,
            subject: subjectText,
            text: text,
            html: `<html>

            <head>

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
                <table width="600" border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse; background-color:#fff;border: solid 1px #00c1cb;" bgcolor="#fff" align="center">
                    <tbody>

                            <tr>
                        <td valign="top"  style="padding: 10px 0;">
                               <img src="` + baseUrl + `/mailer_images/knowledeg.jpg" width="600" height="122" style="display: block; border: 0;outline:0;"/></td>
                    </tr>

                        <tr>
                        <td valign="top" align="center" style="padding-top: 20px;">
                            <table width="490" border="0" cellspacing="0" cellpadding="0" align="center">
              <tbody>
                <tr>
                  <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px  5px;text-align: left;">Dear User</td>
                </tr>
                   <tr>
                  <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 15px 5px;text-align: left;">
        Your one - time password is < 3774 >
            </td>
                    </tr>
                      <tr>
                      <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 30px 5px;text-align: left;">
        Use this one - time password to login and further ensure security. 
        </td>
                    </tr>
                      <tr>
                      <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 30px 5px;text-align: left;">
                      Don’t forget to set your pattern within the app.
        </td>
                    </tr>
                      <tr>
                      <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 30px 5px;text-align: left;">
                      Regards,
        </td>
                    </tr>
                      <tr>
                      <td valign="top" style="color:#000;font-size: 15px;font-family:Gotham,Arial;line-height: 1.3;padding:0px 5px 0px 5px;text-align: left;">
                      Profolio Team


        </td>
                    </tr>

              </tbody>
            </table>

                            </td>
                        </tr>





                    </tbody>
                </table>

            </body>
            </html>`
                //html: 'my text ' + text
        }, function(err, mail) {

            cb(err, mail);
        });
        //cb(null, Email.app);
    }

    //Remote Functions to send email
    Email.remoteMethod('send_email', {
        http: { path: '/send_email', verb: 'get' },
        accepts: [
            { arg: 'to', type: 'string' },
            { arg: 'from', type: 'string' },
            { arg: 'subject', type: 'string' },
            { arg: 'text', type: 'string' }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to validateEmail Domain
    Email.validateEmail = function(dataObj, cb) {

        if (dataObj.email_id != undefined && dataObj.email_id != null && dataObj.email_id != '') {

            var resopnseObj = {
                result: "",
                isValid: false
            }

            legit(dataObj.email_id).then(result => {
                    // result.isValid ? console.log("Valid!") : console.log("Invalid!");
                    // console.log(JSON.stringify("Legit :", result));
                    if (result.isValid) {

                        resopnseObj.result = "Valid!";
                        resopnseObj.isValid = true;

                        cb(null, resopnseObj);
                    } else {
                        resopnseObj.result = "Invalid!";
                        resopnseObj.isValid = false;
                        cb(null, resopnseObj);
                    }

                })
                .catch(err => {
                    //console.log(err)
                    resopnseObj.result = "Invalid!";
                    resopnseObj.isValid = false;
                    cb(null, resopnseObj);
                });
        } else {
            cb(error(406, "cannot find email id"), null);
        }
    }

    Email.remoteMethod('validateEmail', {
        http: { path: '/validateEmail', verb: 'post' },
        accepts: [
            { arg: 'dataObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //creating error msgs
    function error(code, data) {
        var err = new Error(data);
        err.statusCode = code;
        return err
    }
};