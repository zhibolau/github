
var FieldSchema = require("./field.schema.js");

module.exports = function(mongoose,app) {


    var FormSchema  = mongoose.Schema({
        "id": String,
        "title": String,
        "userId": Number,
        "fields": FieldSchema

    }, {collection: "cs5610.assignment.form"});

    return FormSchema;
};