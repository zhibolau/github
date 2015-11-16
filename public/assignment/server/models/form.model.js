var mock = require("./form.mock.json");
var guid = require("guid");
module.exports = function(app) {
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

    function CreateFieldForForm(formId, field){
        var newField = {
            id : guid.create(),
            type : field.type,
            label : field.label,
            placeholder: field.placeholder
        };
        var form = FindById(formId);
        form.fields.push(newField);
        return form;
    }

    function FindFieldsByFormId(id){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].id == id){
                return mock[i].fields;
            }
        }
        return null;
    }

    function FindFieldByFieldIdAndFormId(FieldId,FormId){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].id == FormId){
                for (var j = 0; j<mock[i].fields.length; j++){
                    if (mock[i].fields[j].id == FieldId){
                        return mock[i].fields[j];
                    }
                }
            }
        }
        return null;
    }

    function DeleteFieldByFieldIdAndFormId(FieldId,FormId){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].id == FormId){
                for (var j = 0; j<mock[i].fields.length; j++){
                    if (mock[i].fields[j].id == FieldId){
                         mock[i].fields.splice(j,1);
                        return mock[i].fields;
                    }
                }
            }
        }
        return null;
    }

    function UpdateFieldByFieldIdAndFormId(FieldId,FormId, field){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].id == FormId){
                for (var j = 0; j<mock[i].fields.length; j++){
                    if (mock[i].fields[j].id == FieldId){
                        mock[i].fields[j].label = field.label;
                        mock[i].fields[j].type = field.type;
                        mock[i].fields[j].placeholder = field.placeholder;

                        return mock[i].fields[j];
                    }
                }
            }
        }
        return null;
    }

    //form related functions
    function Create(form){
        mock.push(form);
        return mock;
    }

    function CreateFormForUser(userId, form){
        var newForm = {
            id : guid.create(),
            userId : userId,
            title : form.title,
            fields: form.fields
        };
        mock.push(newForm);
        return newForm;
    }

    function FindAll(){
        return mock;
    }

    function FindById(id){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].id == id){
                return mock[i];
            }
        }
        return null;
    }

    function FindByUserId(userId){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].userId == userId){
                return mock[i];
            }
        }
        return null;
    }

    function Update(id, form){
        var newForm = FindById(id);
        if (newForm != null) {
            newForm.id = form.id;
            newForm.userId = form.userId;
            newForm.title = form.title;
            newForm.fields = form.fields;

            return newForm;
        }
        return null;
    }

    function Delete(id){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].id == id){
                mock.splice(i,1);
            }
        }
        return mock;
    }

    function FindFormByTitle(title){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].title == title){
                return mock[i];
            }
        }
        return null;
    }

};
