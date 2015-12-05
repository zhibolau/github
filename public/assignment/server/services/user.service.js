// var model = require("../models/user.model.js")();

module.exports = function (app,model) {
    app.post("/api/assignment/user", Create);
    //app.get("/api/assignment/user", FindAll);
    app.get("/api/assignment/user/:id", FindById);
    //app.get("/api/assignment/user?username=username", findUserByUsername);
    //app.get("/api/assignment/user?username=username&password=password", findUserByCredentials);
    app.put("/api/assignment/user/:id", Update);
    app.delete("/api/assignment/user/:id", Delete);

    app.get("/api/assignment/user", function (req,res) {
        var username = req.query.username;
        var password = req.query.password;
        if(password != null && username !=null){
            var credential ={
                username: username,
                password: password
            };
            var user_found = model.findUserByCredentials(credential);
            res.jsonp(user_found);
        } else if (username != null){
            var user_found = model.findUserByUsername(username);
            res.jsonp(user_found);
        }
        else{
            res.jsonp(model.FindAll());
        }

    });

    function Create(req,res){
        var user = req.body;
        res.jsonp(model.Create(user));
    }

    //function FindAll(req,res){
    //    res.jsonp(model.FindAll());
    //}

    function FindById(req,res){
        var id = req.params.id;
        res.jsonp(model.FindById(id));
    }

    //function findUserByUsername(req,res){
    //    var username = req.params.username;
    //    res.jsonp(model.findUserByUsername(username));
    //}
    //
    //
    //
    //
    //function findUserByCredentials(req,res){
    //    var credentials = {
    //        "username": req.params.username,
    //        "password": req.params.password};
    //
    //    res.jsonp(model.findUserByCredentials(credentials));
    //}

    function Update(req,res){
        var user = req.body;
        var id = req.params.id;
        res.jsonp(model.Update(id, user));
    }

    function Delete(req,res){
        var id = req.params.id;
        res.jsonp(model.Delete(id));
    }

}