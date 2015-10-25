(function()
{
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $location, UserService, $rootScope)
    {
        
        $scope.$location = $location;
        
        $scope.update = function() {
            
            UserService.updateUser($scope.user.id, $scope.user, function(user){
                
                if(user != null)
                {
                    $rootScope.user = user;
                    $location.url("/profile");
                    
                }
            });
        }
        
    }
})();