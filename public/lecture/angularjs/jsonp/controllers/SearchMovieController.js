(function () {
    angular
        .module("MovieApp")
        .controller("SearchMovieController", SearchMovieController);

    function SearchMovieController($scope, $http, MovieService){
        $scope.searchMovie = searchMovie;
        $scope.likeMovie = likeMovie;
        //$scope.response = "hello";
        //$http.jsonp(url)
        //    .success(function (response) {
        //        $scope.response = response;
        //    });
        var url = "http://www.myapifilms.com/imdb?title=TITLE&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=5&forceYear=0&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&similarMovies=0&adultSearch=0&callback=JSON_CALLBACK";

        function searchMovie(title){
            MovieService.searchMovieByTitle(title, function (response) {
                $scope.response = response;
            });
        };

        function likeMovie(idIMDB) {
            MovieService,likeMovie(idIMDB, function (response) {

            });
        };


    }
})();
