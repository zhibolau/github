(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("AirJordan13CP3CommentController", AirJordan13CP3CommentController);

    function AirJordan13CP3CommentController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();