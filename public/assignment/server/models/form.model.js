var mock = require("./form.mock.json");
var guid = require("guid");
var formSchema = require("./form.schema.js");
var fieldSchema = require("./field.schema.js");

module.exports = function(app) {
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


    //form related functions
    //function Create(form){
    //    mock.push(form);
    //    return mock;
    //}
    function Create(form){
        var deferred = q.defer();

        FormModel.create(form, function(err, doc){
            FormModel.find(function(err, forms){
                deferred.resolve(forms);
            });
        });
        return deferred.promise;
    }

    //function CreateFormForUser(userId, form){
    //    var newForm = {
    //        id : guid.create(),
    //        userId : userId,
    //        title : form.title,
    //        fields: form.fields
    //    };
    //    mock.push(newForm);
    //    return newForm;
    //}

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


    //function FindAll(){
    //    return mock;
    //}
    function FindAll() {
        var deferred = q.defer();

        FormModel.find(function(err, forms){
            deferred.resolve(forms);
        });

        return deferred.promise;
    }

    //function FindById(id){
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].id == id){
    //            return mock[i];
    //        }
    //    }
    //    return null;
    //}

    function FindById(id) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form){
            deferred.resolve(form);
        });

        return deferred.promise;
    }

    //function FindByUserId(userId){
    //    var forms =[];
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].userId == userId){
    //            forms.push(mock[i]);
    //        }
    //    }
    //    return forms;
    //}

    function FindByUserId(userId) {
        var deferred = q.defer();

        FormModel.findById(userId, function(err, form){ // 有可能找到的是forms？？？？？？？？？？？？？？？
            deferred.resolve(form);
        });

        return deferred.promise;
    }

    //function Update(id, form){
    //    var newForm = FindById(id);
    //    if (newForm != null) {
    //        newForm.id = form.id;
    //        newForm.userId = form.userId;
    //        newForm.title = form.title;
    //        newForm.fields = form.fields;
    //
    //        return newForm;
    //    }
    //    return null;
    //}

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


    //function Delete(id){
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].id == id){
    //            mock.splice(i,1);
    //        }
    //    }
    //    return mock;
    //}

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


    //function FindFormByTitle(title){
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].title == title){
    //            return mock[i];
    //        }
    //    }
    //    return null;
    //}

    function FindFormByTitle(title) {
        var deferred = q.defer();

        FormModel.findById(title, function(err, form){ // title的可以用findById？？？？？？？？？？？
            deferred.resolve(form);
        });

        return deferred.promise;
    }


    //function CreateFieldForForm(formId, field){
    //    var newField = {
    //        id : guid.create(),
    //        type : field.type,
    //        label : field.label,
    //        placeholder: field.placeholder
    //    };
    //    var form = FindById(formId);
    //    form.fields.push(newField);
    //    return form;
    //}

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

    //function FindFieldsByFormId(id){
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].id == id){
    //            return mock[i].fields;
    //        }
    //    }
    //    return null;
    //}
    function FindFieldsByFormId(id) {
        var deferred = q.defer();

        FormModel.findById(id, function(err, form){ // 有可能找到的是forms？？？？？？？？？？？？？？？
            deferred.resolve(form.fields);  // 可以写成form.fields？？？？？？？？？？？？？？？？？
        });

        return deferred.promise;
    }



    //function FindFieldByFieldIdAndFormId(FieldId,FormId){
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].id == FormId){
    //            for (var j = 0; j<mock[i].fields.length; j++){
    //                if (mock[i].fields[j].id == FieldId){
    //                    return mock[i].fields[j];
    //                }
    //            }
    //        }
    //    }
    //    return null;
    //}

    function FindFieldByFieldIdAndFormId(FieldId,FormId) {
        var deferred = q.defer();

        FormModel.findById(FormId, function(err, form){ // 这么写行？？？？？？？？？？？？？？？
            FieldModel.findById(FieldId,function(err, field){ // 这么写行？？？？？？？？？？？？？？？
                deferred.resolve(field);
            });
        });

        return deferred.promise;
    }

    //function DeleteFieldByFieldIdAndFormId(FieldId,FormId){
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].id == FormId){
    //            for (var j = 0; j<mock[i].fields.length; j++){
    //                if (mock[i].fields[j].id == FieldId){
    //                    mock[i].fields.splice(j,1);
    //                    return mock[i].fields;
    //                }
    //            }
    //        }
    //    }
    //    return null;
    //}

    function DeleteFieldByFieldIdAndFormId(FieldId,FormId) {
        var deferred = q.defer();

        FormModel.findById(FormId, function(err, form){ // 这么写行？？？？？？？？？？？？？？？
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

    //function UpdateFieldByFieldIdAndFormId(FieldId,FormId, field){
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].id == FormId){
    //            for (var j = 0; j<mock[i].fields.length; j++){
    //                if (mock[i].fields[j].id == FieldId){
    //                    mock[i].fields[j].label = field.label;
    //                    mock[i].fields[j].type = field.type;
    //                    mock[i].fields[j].placeholder = field.placeholder;
    //
    //                    return mock[i].fields[j];
    //                }
    //            }
    //        }
    //    }
    //    return null;
    //}
    function UpdateFieldByFieldIdAndFormId(FieldId,FormId, field) {
        var deferred = q.defer();

        field.delete("_id");

        FormModel.findById(FormId, function(err, form){ // 这么写行？？？？？？？？？？？？？？？
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
