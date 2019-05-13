'use strict';
var moment = require('moment');
module.exports = function(Books) {
    //Functions to fetch books
    Books.getBooks = function(dataArrObj, cb) {
        var selectQuery = "Select bk.* from books bk where 1=1 ";
        var bookArr = [];
        for (var o in dataArrObj) {
            if (o == "created_at") {
                selectQuery += " AND bk." + o + " >= (?)";
                bookArr.push(dataArrObj[o]);
            } else if (o == "updated_at") {
                selectQuery += " AND bk." + o + " > (?)";
                bookArr.push(dataArrObj[o]);
            } else if (o == "name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND bk." + o + " Like (?)";
                    bookArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND bk." + o + " = (?)";
                    bookArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += "  ORDER BY bk.priority ASC, bk.id DESC OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            bookArr.push(offset, dataArrObj['limit']);
        }
        //console.log("Books Query", selectQuery, " : ", bookArr);
        Books.dataSource.connector.query(selectQuery, bookArr, (err, result) => {
            cb(err, result);
        });
    }

    Books.remoteMethod('getBooks', {
        http: { path: '/getBooks', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });

    //Functions to fetch books
    Books.getBooksCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from books bk where 1=1 ";
        var bookArr = [];
        for (var o in dataArrObj) {
            if (o == "created_at") {
                selectQuery += " AND bk." + o + " >= (?)";
                bookArr.push(dataArrObj[o]);
            } else if (o == "updated_at") {
                selectQuery += " AND bk." + o + " > (?)";
                bookArr.push(dataArrObj[o]);
            } else if (o == "name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND bk." + o + " Like (?)";
                    bookArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND bk." + o + " = (?)";
                    bookArr.push(dataArrObj[o]);
                }
            }
        }

        //console.log("Books count Query", selectQuery, " : ", bookArr);
        Books.dataSource.connector.query(selectQuery, bookArr, (err, result) => {
            cb(err, result);
        });
    }

    Books.remoteMethod('getBooksCount', {
        http: { path: '/getBooksCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });


    //Function to add books
    Books.addEditBooks = function(dataArrObj, book_id, cb) {
        var dataArr = [];
        var paramsArr = [];
        var keyString;
        var count = 0;
        let dateObj = new Date();
        var updated_date = moment(dateObj).format('YYYY-MM-DD HH:mm:ss:SSS');
        dataArrObj['updated_at'] = updated_date;
        if (book_id) {
            for (var o in dataArrObj) {
                if (o != "metadata") {
                    dataArr.push(dataArrObj[o]);
                    paramsArr.push(o + "=(?)");
                }
            }
            let paramsKey = paramsArr.join(', ');
            var whereCond = 'where id = (?)';
            dataArr.push(book_id);
            var sqlQuery = "update books set " + paramsKey + " " + whereCond;
            // console.log(UserArr);
            Books.dataSource.connector.query(sqlQuery, dataArr, (err, resultObj) => {
                var result = {};
                result.id = book_id;
                cb(err, result);
            });
        } else {
            if (dataArrObj) {
                for (var o in dataArrObj) {
                    dataArr.push(dataArrObj[o]);
                    paramsArr.push("(?)");
                    if (count == 0) {
                        keyString = o;
                    } else {
                        keyString = keyString + ", " + o;
                    }
                    count++;
                }
                var paramsKey = paramsArr.join(', ');
                var sqlQuery = "insert into books (" + keyString + ") OUTPUT Inserted.id values (" + paramsKey + ")";

                // console.log(UserArr);
                Books.dataSource.connector.query(sqlQuery, dataArr, (err, resultObj) => {
                    var result = {};
                    if (resultObj && (!err)) {
                        result.id = resultObj[0].id;
                        cb(err, result);
                    } else {
                        // if no output
                        cb(err, result);
                    }
                });
            }
        }
    }

    Books.remoteMethod('addEditBooks', {
        http: { path: '/addEditBooks', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } },
            { arg: 'book_id', type: 'any', http: { source: "query" } }
        ],
        returns: { arg: 'result', type: 'any' }
    });


    //Functions to fetch chapters
    Books.getChapters = function(dataArrObj, cb) {
        var selectQuery = "Select ch.*, bk.name as book_name from chapters ch join books bk on bk.id = ch.book_id where 1=1 ";
        var chapterArr = [];
        for (var o in dataArrObj) {
            if (o == "created_at") {
                selectQuery += " AND ch." + o + " >= (?)";
                chapterArr.push(dataArrObj[o]);
            } else if (o == "updated_at") {
                selectQuery += " AND ch." + o + " > (?)";
                chapterArr.push(dataArrObj[o]);
            } else if (o == "name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND ch." + o + " Like (?)";
                    chapterArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND ch." + o + " = (?)";
                    chapterArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += "  ORDER BY ch.priority ASC, ch.id DESC  OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            chapterArr.push(offset, dataArrObj['limit']);
        }

        Books.dataSource.connector.query(selectQuery, chapterArr, (err, result) => {
            cb(err, result);
        });
    }

    Books.remoteMethod('getChapters', {
        http: { path: '/getChapters', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });


    //Functions to fetch chapters
    Books.getChaptersCount = function(dataArrObj, cb) {
        var selectQuery = "select count(*) as total from chapters ch join books bk on bk.id = ch.book_id where 1=1 ";
        var chapterArr = [];
        for (var o in dataArrObj) {
            if (o == "created_at") {
                selectQuery += " AND ch." + o + " >= (?)";
                chapterArr.push(dataArrObj[o]);
            } else if (o == "updated_at") {
                selectQuery += " AND ch." + o + " > (?)";
                chapterArr.push(dataArrObj[o]);
            } else if (o == "name") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND ch." + o + " Like (?)";
                    chapterArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND ch." + o + " = (?)";
                    chapterArr.push(dataArrObj[o]);
                }
            }
        }

        //console.log("selectQuery", selectQuery);

        Books.dataSource.connector.query(selectQuery, chapterArr, (err, result) => {
            cb(err, result);
        });
    }

    Books.remoteMethod('getChaptersCount', {
        http: { path: '/getChaptersCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });


    //Function to add chapter
    Books.addEditChapters = function(dataArrObj, chapter_id, cb) {
        var dataArr = [];
        var paramsArr = [];
        var keyString;
        var count = 0;
        let dateObj = new Date();
        var updated_date = moment(dateObj).format('YYYY-MM-DD HH:mm:ss:SSS');
        dataArrObj['updated_at'] = updated_date;
        if (chapter_id) {
            for (var o in dataArrObj) {
                if (o != "metadata") {
                    dataArr.push(dataArrObj[o]);
                    paramsArr.push(o + "=(?)");
                }
            }
            let paramsKey = paramsArr.join(', ');
            var whereCond = 'where id = (?)';
            dataArr.push(chapter_id);
            var sqlQuery = "update chapters set " + paramsKey + " " + whereCond;
            // console.log(UserArr);
            Books.dataSource.connector.query(sqlQuery, dataArr, (err, resultObj) => {
                var result = {};
                result.id = chapter_id;
                cb(err, result);
            });
        } else {
            if (dataArrObj) {
                for (var o in dataArrObj) {
                    dataArr.push(dataArrObj[o]);
                    paramsArr.push("(?)");
                    if (count == 0) {
                        keyString = o;
                    } else {
                        keyString = keyString + ", " + o;
                    }
                    count++;
                }
                var paramsKey = paramsArr.join(', ');
                var sqlQuery = "insert into chapters (" + keyString + ") OUTPUT Inserted.id values (" + paramsKey + ")";
                // console.log(UserArr);
                Books.dataSource.connector.query(sqlQuery, dataArr, (err, resultObj) => {
                    var result = {};
                    if (resultObj && (!err)) {
                        result.id = resultObj[0].id;
                        cb(err, result);
                    } else {
                        // if no output
                        cb(err, result);
                    }
                });
            }
        }
    }

    Books.remoteMethod('addEditChapters', {
        http: { path: '/addEditChapters', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } },
            { arg: 'chapter_id', type: 'any', http: { source: "query" } }
        ],
        returns: { arg: 'result', type: 'any' }
    });

    //Function to add chapter
    Books.addEditPages = function(dataArrObj, page_id, cb) {
        var dataArr = [];
        var paramsArr = [];
        var keyString;
        var count = 0;
        let dateObj = new Date();
        var updated_date = moment(dateObj).format('YYYY-MM-DD HH:mm:ss:SSS');
        dataArrObj['updated_at'] = updated_date;
        if (page_id) {
            for (var o in dataArrObj) {
                if (o != "metadata") {
                    dataArr.push(dataArrObj[o]);
                    paramsArr.push(o + "=(?)");
                }
            }
            let paramsKey = paramsArr.join(', ');
            var whereCond = 'where id = (?)';
            dataArr.push(page_id);
            var sqlQuery = "update pages set " + paramsKey + " " + whereCond;
            // console.log(UserArr);
            Books.dataSource.connector.query(sqlQuery, dataArr, (err, resultObj) => {
                var result = {};
                result.id = page_id;
                cb(err, result);
            });
        } else {
            if (dataArrObj) {
                for (var o in dataArrObj) {
                    dataArr.push(dataArrObj[o]);
                    paramsArr.push("(?)");
                    if (count == 0) {
                        keyString = o;
                    } else {
                        keyString = keyString + ", " + o;
                    }
                    count++;
                }
                var paramsKey = paramsArr.join(', ');
                var sqlQuery = "insert into pages (" + keyString + ") OUTPUT Inserted.id values (" + paramsKey + ")";

                // console.log(UserArr);
                Books.dataSource.connector.query(sqlQuery, dataArr, (err, resultObj) => {
                    var result = {};
                    if (resultObj && (!err)) {
                        result.id = resultObj[0].id;
                        cb(err, result);
                    } else {
                        // if no output
                        cb(err, result);
                    }
                });
            }
        }
    }

    Books.remoteMethod('addEditPages', {
        http: { path: '/addEditPages', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } },
            { arg: 'page_id', type: 'any', http: { source: "query" } }
        ],
        returns: { arg: 'result', type: 'any' }
    });


    //Functions to fetch pages
    Books.getPages = function(dataArrObj, cb) {
        var selectQuery = "Select pg.*, ch.name as chapter_name from pages pg join chapters ch on ch.id = pg.chapter_id where 1=1 ";
        var chapterArr = [];
        for (var o in dataArrObj) {
            if (o == "created_at") {
                selectQuery += " AND pg." + o + " >= (?)";
                chapterArr.push(dataArrObj[o]);
            } else if (o == "updated_at") {
                selectQuery += " AND pg." + o + " > (?)";
                chapterArr.push(dataArrObj[o]);
            } else if (o == "page_heading") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND pg." + o + " Like (?)";
                    chapterArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND pg." + o + " = (?)";
                    chapterArr.push(dataArrObj[o]);
                }
            }
        }

        if (dataArrObj['limit'] > 0) {
            if (!dataArrObj['page']) { dataArrObj['page'] = 0; }
            var offset = dataArrObj['page'] * dataArrObj['limit'];
            selectQuery += "  ORDER BY pg.id DESC  OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            chapterArr.push(offset, dataArrObj['limit']);
        }

        //console.log("selectQuery", selectQuery);

        Books.dataSource.connector.query(selectQuery, chapterArr, (err, result) => {
            cb(err, result);
        });
    }

    Books.remoteMethod('getPages', {
        http: { path: '/getPages', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });


    //Functions to fetch pages
    Books.getPagesCount = function(dataArrObj, cb) {
        var selectQuery = "Select count(*) as total from pages pg join chapters ch on ch.id = pg.chapter_id where 1=1 ";
        var chapterArr = [];
        for (var o in dataArrObj) {
            if (o == "created_at") {
                selectQuery += " AND pg." + o + " >= (?)";
                chapterArr.push(dataArrObj[o]);
            } else if (o == "updated_at") {
                selectQuery += " AND pg." + o + " > (?)";
                chapterArr.push(dataArrObj[o]);
            } else if (o == "page_heading") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND pg." + o + " Like (?)";
                    chapterArr.push('%' + dataArrObj[o] + '%');
                }
            } else if (o != "limit" && o != "page") {
                if (dataArrObj[o] != '') {
                    selectQuery += " AND pg." + o + " = (?)";
                    chapterArr.push(dataArrObj[o]);
                }
            }

            //console.log("selectQuery Count", selectQuery);

        }

        Books.dataSource.connector.query(selectQuery, chapterArr, (err, result) => {
            cb(err, result);
        });
    }

    Books.remoteMethod('getPagesCount', {
        http: { path: '/getPagesCount', verb: 'post' },
        accepts: [
            { arg: 'dataArrObj', type: 'any', http: { source: "body" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });


    //Functions to fetch highest priority
    Books.getHighestPriority = function(tableName, parentId, cb) {
        var id = "";
        if (tableName == 'books') {
            id = "";
        } else if (tableName == 'chapters') {
            id = "book_id";
        } else if (tableName == 'pages') {
            id = "chapter_id";
        }

        //var selectQuery = "SELECT priority from "+tableName+" ORDER BY priority DESC, id DESC  OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY ";
        var selectQuery = "SELECT priority from " + tableName + " where 1=1 ";
        if (id) {
            selectQuery += " AND " + id + "=" + parentId;
        }
        selectQuery += " ORDER BY priority DESC OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY ";

        //console.log("selectQuery", selectQuery);

        Books.dataSource.connector.query(selectQuery, (err, result) => {
            cb(err, result);
        });
    }

    Books.remoteMethod('getHighestPriority', {
        http: { path: '/getHighestPriority', verb: 'post' },
        accepts: [
            { arg: 'tableName', type: 'any', http: { source: "query" } },
            { arg: 'parentId', type: 'any', http: { source: "query" } }
        ],
        returns: { arg: 'result', type: 'object' }
    });
};