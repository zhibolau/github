
(function()
{
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);


    function FormController($scope, $location, FormService, $rootScope)
    {
        $scope.$location = $location;

        $scope.forms = [];

        if ($rootScope.user != null){
        FormService.findAllFormsForUser($rootScope.user.id).then(function (forms){
                $scope.forms = forms;
            });
        }
        
        $scope.deleteForm = function(index) {
            FormService.deleteFormById($scope.forms[index].id).then(function(forms){
                
            $scope.forms.splice(index,1);
            });
        }
        
        $scope.addForm = function() {
            FormService.createFormForUser($rootScope.user.id, $scope.form).then(function(newForm){
                //console.log(newForm);
            $scope.forms.push(newForm);
            });
        };

        console.log("location: " + $scope.$location.path());

        $scope.jump = function(formid) {
            FormService.getFormByFormId(formid)
                .then(function(newForm){
                //console.log(newForm)
                var myForm = newForm;
                    $scope.$location.path("/forms/"+newForm.id);

                //console.log("location: " + $scope.$location.path());

            });

        };

        
        $scope.updateForm = function() {
        }
        
        $scope.selectForm = function() {
        }
    }
})();