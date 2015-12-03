(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("AirJordanReleaseDateController", AirJordanReleaseDateController);

    function AirJordanReleaseDateController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();