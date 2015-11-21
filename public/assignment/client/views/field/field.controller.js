(function()
{
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController($scope, $rootScope, FieldService, $routeParams,$location)
    {
        $scope.$location = $location;

        if ($rootScope.form != null){
            FieldService.getFieldsForForm($rootScope.form.id,

                function (fields){
                    $scope.fields = fields;
                });
        }

        console.log("userid: " + $routeParams.userId);
        console.log("formid: " + $routeParams.formId);

        $scope.deleteField = function(field) {//????????????
            FieldService.deleteFieldFromForm($rootScope.forms.id,field.id, function(forms){

                $scope.fields.splice(index,1);
            });
        }

        $scope.addField = function(fieldType) {//??????????????
            FieldService.createFieldForForm($rootScope.user.id, $scope.form, function(newField){

                $scope.forms.push(newField);
            });
        }

    }
})();