(function () {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, UserService, $rootScope)
    {
        
        $scope.$location = $location;
        
        $scope.login = function() {
            
            UserService.findUserByUsernameAndPassword($scope.loginUser.username, $scope.loginUser.password, function(user){
                
                if(user != null)
                {
                    $rootScope.user = user;
                    $location.url("/profile");
                }
            });
        }
        
    }

})();