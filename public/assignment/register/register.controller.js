(function()
{
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

     function RegisterController($scope, $location, UserService, $rootScope)
    {
        
        $scope.$location = $location;
        
        $scope.register = function() {
            
            UserService.createUser($scope.user, function(newUser){
                $rootScope.user = newUser;
                $location.url("/profile");
                
                
            });
        }
        
    }
})();