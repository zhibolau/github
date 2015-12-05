(function () {
    angular
        .module("MovieAppEditor2")
        .config(Configure);

    function Configure($routeProvider){
        $routeProvider
            .when("/search",{
                templateUrl: "views/search.view.html",
                controller: "SearchMovieController",
                controllerAs: "model"
                /*})
            .when("/details",{
                templateUrl: "views/movies/details.view.html",
                controller: "MovieDetailsController"
            })
            .otherwise({
                redirect: "/search"*/
            });
    }
})();