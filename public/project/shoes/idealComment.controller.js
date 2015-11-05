(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("IdealCommentController", IdealCommentController);

    function IdealCommentController($scope, $location)
    {
        $scope.$location = $location;
    }
}) ();