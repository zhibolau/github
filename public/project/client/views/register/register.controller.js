(function()
{
    "use strict";
    angular
        .module("IdealApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, UserService, $rootScope)
    {

        $scope.$location = $location;

        $scope.register = function() {

            UserService.createUser($scope.registerUser).then(function(newUser){
                $rootScope.user = newUser;
                $location.url("/profile");


            });
        }

    }
})();