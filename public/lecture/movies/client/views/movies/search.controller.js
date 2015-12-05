(function () {
    angular
        .module("MovieApp")
        .controller("SearchMovieController", SearchMovieController);

    function SearchMovieController($scope, MovieService){
        //$scope.search = search;
        var model = this;
        model.search = search;
        model.like = like;

        function like(movie){
            MovieService.likes(movie);
        }

        function search(title){
            MovieService.searchMovieByTitle(title).then(function(response){
                model.results = response;
            });
            //alert(title);
        }

    }
})();