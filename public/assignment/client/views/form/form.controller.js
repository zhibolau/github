(function()
{
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($location, $rootScope, FormService)
    {
        var model = this;
        var current_user = $rootScope.user;

        model.$location = $location;
        if (current_user != null) {

            FormService
                .findAllFormsForUser(current_user._id)
                .then(function(response) {
                    model.forms = response;
                });
        } else {
            model.forms = [];
        }

        model.saveFormId = function (form)
        {
            $rootScope.formId = form._id;
        }

        model.addForm = function (form)
        {
            if ($rootScope.user != null && form != null) {
                FormService.createFormForUser(current_user._id, form)
                    .then(function (result) {
                        model.forms.push(result);
                    });
            }
        }

        model.updateForm = function (form)
        {
            FormService.updateFormById(form._id, form).then(function (newform) {
                FormService.findAllFormsForUser(current_user._id).then(function(forms) {
                    model.forms = forms;
                });
            });
        }

        model.deleteForm = function (form)
        {
            FormService.deleteFormById(form._id).then(function (forms) {
                FormService
                    .findAllFormsForUser(form.userId)
                    .then(function (result) {
                        model.forms = result;
                    });
            });
        }

        model.selectForm = function (form)
        {
            FormService.getFormById(form._id).then(function (form) {
                model.form = form;
            });
        }
    }
})();