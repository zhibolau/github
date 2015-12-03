(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("Under100Controller", Under100Controller);

    function Under100Controller($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();