
var guid = require("guid");


module.exports = function(mongoose, db) {
    var formSchema = require("./form.schema.js")(mongoose);
    var fieldSchema = require("./field.schema.js")(mongoose);
    var FormModel = mongoose.model("FormModel", formSchema);

    var FieldModel = mongoose.model("FieldModel", fieldSchema);

    var api = {
        //form related functions
        Create: Create,
        CreateFormForUser: CreateFormForUser,
        FindAll: FindAll,
        FindById: FindById,
        FindByUserId: FindByUserId,
        Update: Update,
        Delete: Delete,
        FindFormByTitle: FindFormByTitle,

        //filed related functions
        FindFieldsByFormId: FindFieldsByFormId,
        FindFieldByFieldIdAndFormId: FindFieldByFieldIdAndFormId,
        DeleteFieldByFieldIdAndFormId: DeleteFieldByFieldIdAndFormId,
        CreateFieldForForm: CreateFieldForForm,
        UpdateFieldByFieldIdAndFormId: UpdateFieldByFieldIdAndFormId

    }
    return api;



    function Create(form){
        var deferred = q.defer();

        FormModel.create(form, function(err, doc){
            FormModel.find(function(err, forms){
                deferred.resolve(forms);
            });
        });
        return deferred.promise;
    }



    function CreateFormForUser(userId, form) {
        var deferred = q.defer();

        FormModel.findById(userId, function(err, user){
            user.forms.push(form);
            user.save(function(err, user){
                deferred.resolve(user);
            });
        });

        return deferred.promise;
    }



    function FindAll() {
        var deferred = q.defer();

        FormModel.find(function(err, forms){
            deferred.resolve(forms);
        });

        return deferred.promise;
    }



    function FindById(id) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form){
            deferred.resolve(form);
        });

        return deferred.promise;
    }



    function FindByUserId(userId) {
        var deferred = q.defer();

        FormModel.findById(userId, function(err, form){
            deferred.resolve(form);
        });

        return deferred.promise;
    }



    function Update(id, form) {
        var deferred = q.defer();

        form.delete("_id");

        FormModel.update({_id: id}, {$set: form}, function(err, form) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(form);
            }
        });

        return deferred.promise;
    }




    function Delete(id) {
        var deferred = q.defer();

        FormModel.remove({_id: id}, function(err, status) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(status);
            }
        });

        return deferred.promise;
    }




    function FindFormByTitle(title) {
        var deferred = q.defer();

        FormModel.findById(title, function(err, form){
            deferred.resolve(form);
        });

        return deferred.promise;
    }



    function CreateFieldForForm(formId, field) {
        var deferred = q.defer();

        FormModel.findById(formId, function(err, form){
            form.fields.push(field);
            form.save(function(err, form){
                deferred.resolve(form);
            });
        });

        return deferred.promise;
    }


    function FindFieldsByFormId(id) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form){
            deferred.resolve(form.fields);
        });

        return deferred.promise;
    }





    function FindFieldByFieldIdAndFormId(FieldId,FormId) {
        var deferred = q.defer();

        FormModel.findById(FormId, function(err, form){
            FieldModel.findById(FieldId,function(err, field){
                deferred.resolve(field);
            });
        });

        return deferred.promise;
    }



    function DeleteFieldByFieldIdAndFormId(FieldId,FormId) {
        var deferred = q.defer();

        FormModel.findById(FormId, function(err, form){
            FieldModel.findById(FieldId,function(err, field){
                FieldModel.remove({_id: FieldId}, function(err, status) {
                    if(err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(status);
                    }
                });
            });
            });


        return deferred.promise;
    }


    function UpdateFieldByFieldIdAndFormId(FieldId,FormId, field) {
        var deferred = q.defer();

        field.delete("_id");

        FormModel.findById(FormId, function(err, form){
            FieldModel.findById(FieldId,function(err, field){
                FieldModel.update({_id: FieldId}, {$set: field}, function(err, field) {
                    if(err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(field);
                    }
                });
            });
        });

         return deferred.promise;
    }




};
