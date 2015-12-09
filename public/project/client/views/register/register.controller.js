(function()
{
    angular
        .module("IdealApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $rootScope, UserService)
    {
        var model = this;
        model.$location = $location;

        model.register = function (registerUser) {
            if (registerUser.username != null && registerUser.password1 == registerUser.password2) {
                UserService.createUser(registerUser).then(function (user) {
                    $rootScope.user = user;
                    $location.url("/profile");
                });
            }
        }
    }
})();