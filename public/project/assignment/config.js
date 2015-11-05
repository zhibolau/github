(function(){
    "use strict";
    
    angular
        .module("FormBuilderApp")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider
            .when("/home",{
                templateUrl: "home/home.view.html"
            })
            .when("/login", {
                templateUrl: "login/login.view.html",
                controller: "LoginController"
            })
            .when("/register", {
                templateUrl: "register/register.view.html",
                controller: "RegisterController"
            })
            .when("/profile", {
                templateUrl: "profile/profile.view.html",
                controller: "ProfileController"
            })
            .when("/forms", {
                templateUrl: "form/form.view.html",
                controller: "FormController"
            })
            
            .when("/goPremier", {
                templateUrl: "goPremier/goPremier.view.html",
                controller: "GoPremierController"
            })
        
            .when("/search", {
                templateUrl: "search/search.view.html",
                controller: "SearchController"
            })
        
            .when("/airJordanReleaseDate", {
                templateUrl: "shoes/airJordanReleaseDate.view.html",
                controller: "AirJordanReleaseDateController"
            })
        
            .when("/sneakerReleaseDate", {
                templateUrl: "shoes/sneakerReleaseDate.view.html",
                controller: "SneakerReleaseDateController"
            })
        
            .when("/idealComment", {
                templateUrl: "idealComment/idealComment.view.html",
                controller: "IdealCommentController"
            })
        
            .when("/air-jordan-13-cp3", {
                templateUrl: "home/air-jordan-13-cp3.view.html",
                controller: "AirJordan13CP3CommentController"
            })
        
            .otherwise({
                redirectTo: "/home"
            });
    }
})();