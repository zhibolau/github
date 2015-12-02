


module.exports = function(mongoose,app) {
    var FieldSchema = require("./field.schema.js")(mongoose);

    var FormSchema  = mongoose.Schema({
        "id": String,
        "title": String,
        "userId": Number,
        "fields": FieldSchema

    }, {collection: "cs5610.assignment.form"});

    return FormSchema;
};