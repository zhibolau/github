(function () {
    "use strict";
    angular
        .module("IdealApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, UserService, $rootScope)
    {

        $scope.$location = $location;

        $scope.login = function() {

            UserService.findUserByUsernameAndPassword($scope.loginUser.username, $scope.loginUser.password).then(function(user){

                if(user != null)
                {
                    $rootScope.user = user;
                    $location.url("/profile");
                }
            });
        }

    }

})();