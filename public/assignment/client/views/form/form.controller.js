
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
        
        $scope.updateForm = function() {
        }
        
        $scope.selectForm = function() {
        }
    }
})();