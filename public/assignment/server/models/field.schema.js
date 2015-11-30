
module.exports = function(mongoose) {


    var FieldSchema  = mongoose.Schema({
        "label": String,
        "fieldType": {
            type: String,   // 使用type吗这里？？？？？？？？？？？
            enum: ["TEXT", "TEXTAREA", "RADIO", "CHECKBOX", "SELECT", "DATE"]
        },
        "options ": [{
            "RADIO": {
                label : String,
                value : String  // 应该是什么类型？？？？？？
            },
            "CHECKBOX": {
                label : String,
                value : String  // 应该是什么类型？？？？？？
            },
            "SELECT": {
                label : String,
                value : String  // 应该是什么类型？？？？？？
            }
        }],
        "placeholder": {"TEXT": {"text" : String}},  // 应该是什么类型？？？？？？


    }
        //, {collection: "cs5610.assignment.field"}   这个不用？？？？？？？？？？？？？？？？？？？？？？
    );

    return FieldSchema;
};