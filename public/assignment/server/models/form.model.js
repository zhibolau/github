
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
        FormModel.create(form, function(err, result) {
            deferred.resolve(result);
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
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(forms);
            }
        });

        return deferred.promise;
    }



    function FindById(id) {
        var deferred = q.defer();

        FormModel.findById(formId, function(err, form){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(form);
            }
        });

        return deferred.promise;
    }



    function FindByUserId(userId) {
        var deferred = q.defer();

        FormModel.find({userId: userId}, function(err, forms){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(forms);
            }
        });

        return deferred.promise;
    }



    function Update(id, form) {

        var deferred = q.defer();

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

        FormModel.findOne({title: title}, function(err, form){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(form);
            }
        });

        return deferred.promise;
    }



    function CreateFieldForForm(formId, field) {
        var deferred = q.defer();
        field.id = Guid.create();
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

        FormModel.findById(formId, function(err, form){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(form.fields);
            }
        });

        return deferred.promise;
    }





    function FindFieldByFieldIdAndFormId(fieldId,FormId) {
        var deferred = q.defer();

        FormModel.findById(formId, function(err, form){
            var fields = form.fields;
            for (var i = 0; i < fields.length; i++) {
                if (fields[i]._id == fieldId) {
                    deferred.resolve(fields[i]);
                }
            }
        });

        return deferred.promise;
    }



    function DeleteFieldByFieldIdAndFormId(fieldId,FormId) {
        var deferred = q.defer();

        FormModel.findById(formId, function(err, form){
            var fields = form.fields;
            for (var i = 0; i < fields.length; i++) {
                if (fields[i].id == fieldId) {
                    form.fields.splice(i, 1);
                    form.save(function(err, form){
                        deferred.resolve(form);
                    });
                }
            }
        });

        return deferred.promise;
    }


    function UpdateFieldByFieldIdAndFormId(FieldId,FormId, newField) {
        var deferred = q.defer();

        FormModel.findById(formId, function(err, form){
            var fields = form.fields;
            for (var i = 0; i < fields.length; i++) {
                if (fields[i]._id == fieldId) {
                    fields[i] = newField;
                    deferred.resolve(fields[i]);
                }
            }
        });

        return deferred.promise;
    }




};
