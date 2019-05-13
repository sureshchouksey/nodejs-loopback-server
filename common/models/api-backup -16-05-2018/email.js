'use strict';
module.exports = function(MyModel) {
    // send an email
    MyModel.sendEmail = function(cb) {
      MyModel.app.models.Email.send({
        to: 'rohit1801.yadav@gmail.com',
        from: 'you@gmail.com',
        subject: 'my subject',
        text: 'my text',
        html: 'my <em>html</em>'
      }, function(err, mail) {
       
        cb(err);
      });
    }
  };