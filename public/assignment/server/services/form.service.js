//var model = require("../models/form.model.js")();
module.exports = function (app, model) {
    app.get("/api/assignment/user/:userId/form", FindByUserId);
    app.get("/api/assignment/form/:formId", FindById);
    app.delete("/api/assignment/form/:formId", Delete);
    app.post("/api/assignment/user/:userId/form", CreateFormForUser);
    app.put("/api/assignment/form/:formId", Update);
    app.get("/api/assignment/form", FindAll);

    function FindAll(req,res){
        res.jsonp(model.FindAll());
    }

    function FindByUserId(req,res){
        var id = req.params.userId;
        res.jsonp(model.FindByUserId(id));
    }

    function FindById(req,res){
        var id = req.params.formId;
        res.jsonp(model.FindById(id));
    }

    function Delete(req,res){
        var id = req.params.formId;
        res.jsonp(model.Delete(id));
    }

    function CreateFormForUser(req,res){
        var userid = req.params.userId;
        var form = req.body;
        res.jsonp(model.CreateFormForUser(userid, form));
    }
    function Update(req,res){
        var form = req.body;
        var id = req.params.formId;
        res.jsonp(model.Update(id, form));
    }

}