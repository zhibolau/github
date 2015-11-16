(function()
{
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController(FieldService, $routeParams)
    {
        $scope.$location = $location;

        if ($rootScope.user != null){
            FieldService.findAllFormsForUser($rootScope.user.id,

                function (forms){
                    $scope.forms = forms;
                });
        }

        $scope.deleteField = function(index) {
            FormService.deleteFormById($scope.forms[index].id, function(forms){

                $scope.forms.splice(index,1);
            });
        }

        $scope.addField = function() {
            FormService.createFormForUser($rootScope.user.id, $scope.form, function(newForm){

                $scope.forms.push(newForm);
            });
        }

    }
})();