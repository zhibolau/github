
module.exports = function(mongoose,app) {


    var ArticleSchema  = mongoose.Schema({
        "id": Number,
        "articleName": String,
        "articleAddress": String

    }, {collection: "cs5610.project.article"});

    return ArticleSchema;
};