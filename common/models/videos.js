'use strict';
var moment = require('moment');
module.exports = function(Videos) {

    Videos.getVideos = function(dataArrObj,cb){
		var selectQuery = "Select v.* from videos v where 1=1 ";
		var bookArr = [];
        for(var o in dataArrObj) {
			if(o == "created_at"){
				selectQuery+=" AND v."+o+" >= (?)";
				bookArr.push(dataArrObj[o]);
			}
			else if(o == "updated_at"){
				selectQuery+=" AND v."+o+" > (?)";
				bookArr.push(dataArrObj[o]);
			}
			else if(o =="title"){
				if(dataArrObj[o]!=''){
					selectQuery+=" AND v."+o+" Like (?)";
					bookArr.push('%'+dataArrObj[o]+'%');
				}
			}
			else if(o != "limit" && o != "page"){
				if(dataArrObj[o]!=''){
					selectQuery+=" AND v."+o+" = (?)";
					bookArr.push(dataArrObj[o]);
				}
            }
        }

        if(dataArrObj['limit'] > 0){
            if(!dataArrObj['page']){ dataArrObj['page'] = 0; }
            var offset = dataArrObj['page']*dataArrObj['limit'];
            selectQuery+="  ORDER BY v.priority ASC  OFFSET (?) ROWS FETCH NEXT (?) ROWS ONLY ";
            bookArr.push(offset,dataArrObj['limit']);
        }

		Videos.dataSource.connector.query(selectQuery,bookArr,(err,result)=>{
			cb(err,result);
		});
    }
    
    Videos.remoteMethod('getVideos',{
		http:{ path:'/getVideos', verb: 'post'},
		accepts:[
					{ arg: 'dataArrObj', type:'any', http:{ source:"body"} }
				],
		returns:{ arg: 'result', type: 'object'}
    });


    Videos.getVideosCount = function(dataArrObj,cb){
		var selectQuery = "Select count(*) as total from videos v where 1=1 ";
		var bookArr = [];
        for(var o in dataArrObj) {
			if(o == "created_at"){
				selectQuery+=" AND v."+o+" >= (?)";
				bookArr.push(dataArrObj[o]);
			}
			else if(o == "updated_at"){
				selectQuery+=" AND v."+o+" > (?)";
				bookArr.push(dataArrObj[o]);
			}
			else if(o =="title"){
				if(dataArrObj[o]!=''){
					selectQuery+=" AND v."+o+" Like (?)";
					bookArr.push('%'+dataArrObj[o]+'%');
				}
			}
			else if(o != "limit" && o != "page"){
				if(dataArrObj[o]!=''){
					selectQuery+=" AND v."+o+" = (?)";
					bookArr.push(dataArrObj[o]);
				}
            }
        }

		Videos.dataSource.connector.query(selectQuery,bookArr,(err,result)=>{
			cb(err,result);
		});
    }

    Videos.remoteMethod('getVideosCount',{
		http:{ path:'/getVideosCount', verb: 'post'},
		accepts:[
					{ arg: 'dataArrObj', type:'any', http:{ source:"body"} }
				],
		returns:{ arg: 'result', type: 'object'}
    });



    //Function to add videos
    Videos.addEditVideos = function(dataArrObj,video_id,cb){
        var dataArr = [];
        var paramsArr = [];
        var keyString;
        var count = 0;
        let dateObj = new Date();
        var updated_date = moment(dateObj).format('YYYY-MM-DD HH:mm:ss:SSS');
        dataArrObj['updated_at'] = updated_date;
		if(video_id){
            for(var o in dataArrObj) {
                if(o!="metadata"){
                    dataArr.push(dataArrObj[o]);
                    paramsArr.push(o+"=(?)");
                }
            }
            let paramsKey= paramsArr.join(', ');
            var whereCond = 'where id = (?)';
			dataArr.push(video_id);
            var sqlQuery = "update videos set "+paramsKey+" "+whereCond;
            // console.log(UserArr);
            Videos.dataSource.connector.query(sqlQuery,dataArr,(err,resultObj)=>{
                var result = {};
                result.id = video_id;
                cb(err,result);
            });
        }else{
            if(dataArrObj){
                for(var o in dataArrObj) {
                    dataArr.push(dataArrObj[o]);
                    paramsArr.push("(?)");
                    if(count==0){
                        keyString = o;
                    }else{
                        keyString = keyString+", "+o;
                    }
                    count++;
                }
                var paramsKey = paramsArr.join(', ');
                var sqlQuery = "insert into videos ("+keyString+") OUTPUT Inserted.id values ("+paramsKey+")";
               
                // console.log(UserArr);
                Videos.dataSource.connector.query(sqlQuery,dataArr,(err,resultObj)=>{
                    var result = {};
                    if(resultObj && (!err)){
                        result.id = resultObj[0].id;
                        cb(err,result);
                    }
                    else{
                        // if no output
                        cb(err,result);
                    }
                });
            }
        }
    }

	Videos.remoteMethod('addEditVideos',{
		http:{ path:'/addEditVideos', verb: 'post'},
		accepts:[
					{ arg: 'dataArrObj', type:'any', http:{ source:"body"} },
					{ arg: 'video_id', type:'any', http:{ source:"query"} }
				],
		returns:{ arg: 'result', type: 'any'}
    });


    //Functions to fetch highest priority
    Videos.getHighestPriority = function(tableName,cb){
		var selectQuery = "SELECT priority from "+tableName+" ORDER BY priority DESC, id DESC  OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY ";
		Videos.dataSource.connector.query(selectQuery,(err,result)=>{
			cb(err,result);
		});
	}

	Videos.remoteMethod('getHighestPriority',{
		http:{ path:'/getHighestPriority', verb: 'post'},
		accepts:[
					{ arg: 'tableName', type:'any', http:{ source:"query"} }
				],
		returns:{ arg: 'result', type: 'object'}
    });
};
