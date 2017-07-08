/**
 * Created by think on 2017/7/8.
 */
//var request = require('request');
//request('https://www.baidu.com', function (error, response, body) {
//    if (!error && response.statusCode == 200) {
//        console.log(body); // Print the google web page.
//    }
//});
var myUtil = require('./myUtil.js');
var url="http://movie.douban.com/subject/11529526";
console.log(url);
myUtil.get(url,function(content,status){
    console.log("status:="+status);
    //console.log(";content="+content);
});
