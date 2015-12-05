(function () {
    "use strict";
    angular
        .module("IdealApp")
        .controller("SearchController", SearchController);

    function SearchController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();