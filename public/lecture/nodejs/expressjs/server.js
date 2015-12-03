//http://expressjs.com/4x/api.html


//var app = require('express')();
    var express = require('express');
    var app = express();


    var bodyParser = require('body-parser');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/hello', sayHello); // 网址中加入/hello， 就call sayHello这个function
    app.get('/json', function (req, res) {
        var course = {
            title: 'java',
            seats: 23,
            start: new Date()
        };
        res.json(course);

    });

    var courses = [
        {title: 'java', seats: 23, start: new Date()},
        {title: 'r', seats: 233, start: new Date()},
        {title: 'd', seats: 243, start: new Date()},
        {title: 'b', seats: 231, start: new Date()},
        {title: 'c', seats: 234, start: new Date()}
    ]

    app.get('/api/course', function (req, res) {

        res.json(courses);
    })

    app.get('/api/course/:id', function (req, res) {
        var index = req.params.id;
        console.log(index);
        res.json(courses[index]);
    })

    app.put('/api/course/:id', function (req, res) {
        var index = req.params.id;
        courses[index] = req.body;
        res.json(courses);
    })

    app.delete('/api/course/:id', function (req, res) {
        var index = req.params.id;
        courses.splice(index, 1); // remove one course at that particular index
        //console.log(index);
        res.json(courses);
    })

    app.post('/api/course', function (req, res) {
        var newCourse = req.body; //payload is body from advanced rest client
        console.log(newCourse);
        courses.push(newCourse);
        res.json(courses);
    })

    function sayHello(req, res) { // req是client的request， res 是我们可以send东西到client
        console.log('say hello');
        res.send('<h1>say hello</h1>'); // send response back to client's req
    }

    app.listen(3000);

}
