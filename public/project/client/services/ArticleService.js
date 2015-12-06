(function()
{
    "use strict";
    angular
        .module("IdealApp")
        .factory("ArticleService", ArticleService);

    function ArticleService($http, $q)
    {
        var service = {
            findArticleByKeyword : findArticleByKeyword

        };

        return service;



        function findArticleByKeyword(articleName)
        {
            var deferred = $q.defer();
            $http.get("/api/project/article?articleName="+articleName)
                .success(function (response) {
                    deferred.resolve(response);
                });
            return deferred.promise;
        }





    }
})();