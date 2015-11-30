
module.exports = function(mongoose, app) {


    var UserSchema  = mongoose.Schema({
        "id": Number,
        "firstName": String,
        "lastName": String,
        "username": String,
        "password": String

    }, {collection: "cs5610.assignment.user"});

    return UserSchema;
};