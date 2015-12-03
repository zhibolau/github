(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("400-500Controller", 400-500Controller);

    function 400-500Controller($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();