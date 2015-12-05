(function () {
    "use strict";
    angular
        .module("IdealApp")
        .controller("AirJordan13CP3CommentController", AirJordan13CP3CommentController);

    function AirJordan13CP3CommentController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();