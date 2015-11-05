(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("SearchController", SearchController);

    function SearchController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();