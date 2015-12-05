(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("500aboveController", 500aboveController);

    function 500aboveController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();