(function () {
    "use strict";
    angular
        .module("IdealApp")
        .controller("GoPremierController", GoPremierController);

    function GoPremierController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();