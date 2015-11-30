// var model = require("../models/form.model.js")();
module.exports = function (app, model) {
    app.get("/api/assignment/form/:formId/field", FindFieldsByFormId);
    app.get("/api/assignment/form/:formId/field/:fieldId", FindFieldByFieldIdAndFormId);
    app.delete("/api/assignment/form/:formId/field/:fieldId", DeleteFieldByFieldIdAndFormId);
    app.post("/api/assignment/form/:formId/field", CreateFieldForForm);
    app.put("/api/assignment/form/:formId/field/:fieldId", UpdateFieldByFieldIdAndFormId);

    function FindFieldsByFormId(req,res){ //怎么获得当前form 跟 field 的 各自id？？？？？？？？？？
        var id = req.params.formId;
        res.jsonp(model.FindFieldsByFormId(id));
    }

    function FindFieldByFieldIdAndFormId(req,res){ //怎么获得当前form 跟 field 的 各自id
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;

        res.jsonp(model.FindFieldByFieldIdAndFormId(fieldId,formId));
    }

    function DeleteFieldByFieldIdAndFormId(req,res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;

        res.jsonp(model.DeleteFieldByFieldIdAndFormId(fieldId,formId));
    }

    function CreateFieldForForm(req,res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        res.jsonp(model.CreateFieldForForm(fieldId,formId));
    }
    function UpdateFieldByFieldIdAndFormId(req,res){
        var field = req.body;
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        res.jsonp(model.UpdateFieldByFieldIdAndFormId(fieldId, formId, field));
    }

}