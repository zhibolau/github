(function () {
    "use strict";
    angular
        .module("IdealApp")
        .controller("IdealCommentController", IdealCommentController);

    function IdealCommentController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();