(function()
{
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $location, UserService)
    {
        var model = this;
        model.$location = $location;
        model.login = function (loginUser)
        {
            UserService
                .findUserByUsernameAndPassword(loginUser.username, loginUser.password)
                .then(function (user) {
                    if (user != null) {
                        $rootScope.user = user;
                        $location.url("/profile");
                    }
                });
        }
    }
})();