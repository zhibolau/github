(function(){
    "use strict";
    
    angular
        .module("IdealApp")
        .config(Configure);

    function Configure($routeProvider) {
        $routeProvider
            .when("/home",{
                templateUrl: "views/home/home.view.html"
            })
            .when("/login", {
                templateUrl: "views/login/login.view.html",
                controller: "LoginController"
            })
            .when("/register", {
                templateUrl: "views/register/register.view.html",
                controller: "RegisterController"
            })
            .when("/profile", {
                templateUrl: "views/profile/profile.view.html",
                controller: "ProfileController"
            })
            .when("/username", {
                templateUrl: "views/profile/profile.view.html",
                controller: "ProfileController"
            })
            .when("/forms", {
                templateUrl: "../notInUse/form/form.view.html",
                controller: "FormController"
            })
            
            .when("/goPremier", {
                templateUrl: "views/goPremier/goPremier.view.html",
                controller: "GoPremierController"
            })
        
            .when("/search", {
                templateUrl: "views/search/search.view.html",
                controller: "SearchController"
            })
        
            .when("/airJordanReleaseDate", {
                templateUrl: "views/shoes/airJordanReleaseDate.view.html",
                controller: "AirJordanReleaseDateController"
            })
        
            .when("/sneakerReleaseDate", {
                templateUrl: "views/shoes/sneakerReleaseDate.view.html",
                controller: "SneakerReleaseDateController"
            })
        
            .when("/idealComment", {
                templateUrl: "views/idealComment/idealComment.view.html",
                controller: "IdealCommentController"
            })
        
            .when("/air-jordan-13-cp3", {
                templateUrl: "views/home/air-jordan-13-cp3.view.html",
                controller: "AirJordan13CP3CommentController"
            }) 
        
            .when("/mercurialCr7Se324kGold", {
                templateUrl: "views/home/mercurialCr7Se324kGold.view.html",
                controller: "MercurialCr7Se324kGoldController"
            })
        
            .otherwise({
                redirectTo: "/home"
            });
    }
})();