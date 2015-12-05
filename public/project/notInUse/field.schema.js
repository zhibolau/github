
module.exports = function(mongoose, app) {


    var FieldSchema  = mongoose.Schema({
        "label": String,
        "fieldType": {
            type: String,   // should i use type here£¿£¿£¿£¿£¿£¿£¿£¿£¿£¿£¿
            enum: ["TEXT", "TEXTAREA", "RADIO", "CHECKBOX", "SELECT", "DATE"]
        },
        "options ": [{
            "RADIO": {
                label : String,
                value : String  // what is type here?£¿£¿£¿£¿£¿£¿
            },
            "CHECKBOX": {
                label : String,
                value : String  // what is type here?£¿£¿£¿£¿£¿£¿
            },
            "SELECT": {
                label : String,
                value : String  // what is type here?
            }
        }],
        "placeholder": {"TEXT": {"text" : String}},  // what is type here?


    }
        //, {collection: "cs5610.assignment.field"}
    );

    return FieldSchema;
};