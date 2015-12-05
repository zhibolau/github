(function () {
    "use strict";
    angular
        .module("IdealApp")
        .controller("SneakerReleaseDateController", SneakerReleaseDateController);

    function SneakerReleaseDateController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();