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
            //console.log("user id in profile: " + $scope.profileUser.id);

            UserService.updateUser($rootScope.user.id, $rootScope.user, function(user){
                
                if(user != null)
                {
                    $rootScope.user = user;
                    $location.url("/profile");
                    
                }
            });
        }
        
    }
})();