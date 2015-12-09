var q = require("q");
var guid = require("guid");


module.exports = function(mongoose, db) {
    var formSchema = require("./form.schema.js")(mongoose);
    var fieldSchema = require("./field.schema.js")(mongoose);
    var FormModel = mongoose.model("FormModel", formSchema);

    var FieldModel = mongoose.model("FieldModel", fieldSchema);

    var api = {
        //form related functions
        Create: Create,
        createFormForUser: createFormForUser,
        findAllForms: findAllForms,
        findFormById: findFormById,
        findAllFormsForUser: findAllFormsForUser,
        updateFormById: updateFormById,
        deleteFormById: deleteFormById,
        FindFormByTitle: FindFormByTitle,

        //filed related functions
        findAllFieldsForForm: findAllFieldsForForm,
        findFieldById: findFieldById,
        deleteFieldFromForm: deleteFieldFromForm,
        createFieldForForm: createFieldForForm,
        updateFieldById: updateFieldById

    }
    return api;



    function Create(form){
        var deferred = q.defer();
        FormModel.create(form, function(err, result) {
            deferred.resolve(result);
        });

        return deferred.promise;
    }



    function createFormForUser(userId, form) {
        var deferred = q.defer();

        FormModel.findById(userId, function(err, user){
            user.forms.push(form);
            user.save(function(err, user){
                deferred.resolve(user);
            });
        });

        return deferred.promise;
    }



    function findAllForms() {
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



    function findFormById(id) {
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



    function findAllFormsForUser(userId) {
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



    function updateFormById(id, form) {

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




    function deleteFormById(id) {
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



    function createFieldForForm(formId, field) {
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


    function findAllFieldsForForm(id) {

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





    function findFieldById(fieldId,FormId) {
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



    function deleteFieldFromForm(fieldId,FormId) {
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


    function updateFieldById(FieldId,FormId, newField) {
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
