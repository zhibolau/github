var q = require("q");
var guid = require("guid");


module.exports = function(mongoose, db) {
    var articleSchema = require("./article.schema.js")(mongoose);
    var ProjectArticleModel = mongoose.model("ProjectArticleModel", articleSchema);



    var api = {
        findArticleByKeyword: findArticleByKeyword
    }
    return api;






    function findArticleByKeyword(articleName) {
        var deferred = q.defer();

        ProjectArticleModel.find(articleName, function(err, article){
            deferred.resolve(article);
        });
        return deferred.promise;
    }






};
