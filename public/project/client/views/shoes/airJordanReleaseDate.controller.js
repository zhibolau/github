(function () {
    "use strict";
    angular
        .module("IdealApp")
        .controller("AirJordanReleaseDateController", AirJordanReleaseDateController);

    function AirJordanReleaseDateController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();