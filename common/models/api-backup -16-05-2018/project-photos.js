'use strict';

module.exports = function(Projectphotos) {

    Projectphotos.remoteMethod('upload_project_photo', {
        http: { path: '/upload_project_photo', verb: 'POST' },
        accepts: [
            { arg: 'projectPhoto', type: 'file', http: { source: 'body'} }
        ],
        returns: { arg: 'data', type: 'object' }
    });
};
