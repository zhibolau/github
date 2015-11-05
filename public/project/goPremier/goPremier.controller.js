(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("GoPremierController", GoPremierController);

    function GoPremierController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();