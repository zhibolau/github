(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("AirJordansController", AirJordansController);

    function AirJordansController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();