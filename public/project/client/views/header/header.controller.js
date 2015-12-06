(function () {
    "use strict";
    angular
        .module("IdealApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location, ArticleService,$rootScope)
    {
        $scope.$location = $location;
        $scope.searchArticle = searchArticle;
        function searchArticle(article) {
            ArticleService.findArticleByKeyword(article, function(article){
                if(article != null)
                {
                    $rootScope.article = article;

                }
            });
        }
    }
}) ();
