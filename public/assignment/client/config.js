(function(){
    "use strict";
    
    angular
        .module("FormBuilderApp")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider
            .when("/home",{
                templateUrl: "views/home/home.view.html"
            })
            .when("/login", {
                templateUrl: "views/login/login.view.html",
                controller: "LoginController"
                // controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/register/register.view.html",
                controller: "RegisterController"
            })
            .when("/profile", {
                templateUrl: "views/profile/profile.view.html",
                controller: "ProfileController"
            })
            .when("/forms", {
                templateUrl: "views/form/form.view.html",
                controller: "FormController"
            })

            .when("/fields", {
                templateUrl: "views/field/field.view.html",
                controller: "FieldController"
            })

            .when("/user", {
                templateUrl: "views/field/field.view.html",
                controller: "FieldController"
            })
            .when("/forms/:formId", {
                templateUrl: "views/field/field.view.html",
                controller: "FieldController"
            })

            .otherwise({
                redirectTo: "/home"
            });
    }
})();