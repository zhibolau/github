var express = require('express');
var app = express();
 
app.use(express.static(__dirname + '/public/assignment'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
 
app.listen(port, ipaddress);

app.get("/", function (req, res) {
res.sendfile(__dirname + '/public/assignment/home.html');
});