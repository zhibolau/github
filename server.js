var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610fall2015exmpl1');
var db = mongoose.connection;

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var bodyParser = require('body-parser');

//var connectionString = 'mongodb://127.0.0.1:27017/cs5610fall2015exmpl1';
//
//if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
//    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
//        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
//        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
//        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
//        process.env.OPENSHIFT_APP_NAME;
//}
//
//var db = mongoose.connect(connectionString);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function (req, res) {
res.sendfile(__dirname + '/public');
});

//app.get('/course', function(req, res){
//    var str ='function()(angular.courses = ';
//    str += JSON.stringify(courses);
//    str+= '}}();';
//    res.send(str);
//})

//require("./public/lecture/nodejs/expressjs/server.js")(app);
//require("./public/lecture/nodejs/angularjsClient/server.js")(app);
//
//require("./public/lecture/angularjs/jsonp/server/services/MovieService.js")(app);
//require("./public/lecture/movies/server/app.js")(app);
//

//require ("./public/lecture/mongo/server/app.js")(app,mongoose, db);
require ("./public/assignment/server/app.js")(app, mongoose, db);
app.listen(port, ipaddress);