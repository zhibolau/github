(function () {
    "use strict";
    angular
        .module("IdealApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();