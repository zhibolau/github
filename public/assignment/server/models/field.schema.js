
module.exports = function(mongoose) {


    var FieldSchema  = mongoose.Schema({
        "label": String,
        "fieldType": {
            type: String,   // ʹ��type�������������������������
            enum: ["TEXT", "TEXTAREA", "RADIO", "CHECKBOX", "SELECT", "DATE"]
        },
        "options ": [{
            "RADIO": {
                label : String,
                value : String  // Ӧ����ʲô���ͣ�����������
            },
            "CHECKBOX": {
                label : String,
                value : String  // Ӧ����ʲô���ͣ�����������
            },
            "SELECT": {
                label : String,
                value : String  // Ӧ����ʲô���ͣ�����������
            }
        }],
        "placeholder": {"TEXT": {"text" : String}},  // Ӧ����ʲô���ͣ�����������


    }
        //, {collection: "cs5610.assignment.field"}   ������ã�������������������������������������������
    );

    return FieldSchema;
};