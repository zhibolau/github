(function () {
    "use strict";
    angular
        .module("IdealApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($scope, $location)
    {
        $scope.$location = $location;
    }
} )();