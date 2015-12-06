

module.exports = function (app,model) {

    app.get("/api/project/article", function (req,res) {
        var articleName = req.query.articleName;
        if (articleName != null){
            var article_found = model.findArticleByKeyword(articleName);
            res.jsonp(article_found);
        }

    });




}