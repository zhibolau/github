var q = require("q");
var mock = require("./user.mock.json");
var guid = require("guid");
var userSchema = require("./user.schema.js");

module.exports = function(mongoose, db) {
    var UserModel = mongoose.model("UserModel", userSchema);



    var api = {
        Create: Create,
        FindAll: FindAll,
        FindById: FindById,
        Update: Update,
        Delete: Delete,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    }
    return api;

    function Create(user){
        var deferred = q.defer();
        //mock.push(user);
        //return mock;
        UserModel.create(user, function(err, doc){
            UserModel.find(function(err, users){
                deferred.resolve(users);
            });
        });
        return deferred.promise;
    }


    function FindAll() {
        var deferred = q.defer();

        UserModel.find(function(err, users){
            deferred.resolve(users);
        });

        return deferred.promise;
    }

    function FindById(id) {
        var deferred = q.defer();

        UserModel.findById(id, function(err, user){
            deferred.resolve(user);
        });

        return deferred.promise;
    }


    function Update(id, user) {
        var deferred = q.defer();

        user.delete("_id");

        UserModel.update({_id: id}, {$set: user}, function(err, user) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    //function Update(id, user){
    //    var newUser = FindById(id);
    //    if (newUser != null) {
    //        newUser.username = user.username;
    //        newUser.password = user.password;
    //        newUser.email = user.email;
    //        newUser.firstName = user.firstName;
    //        newUser.lastName = user.lastName;
    //
    //        return newUser;
    //    }
    //    return null;
    //}

    function Delete(id) {
        var deferred = q.defer();

        UserModel.remove({_id: id}, function(err, status) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(status);
            }
        });

        return deferred.promise;
    }

    //function Delete(id){
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].id == id){
    //            mock.splice(i,1);
    //        }
    //    }
    //    return mock;
    //}

    function findUserByUsername(username) {
        var deferred = q.defer();

        UserModel.find(username, function(err, user){
            deferred.resolve(user);
        });

        return deferred.promise;
    }

    //function findUserByUsername(username){  用了find  就不用自己定义的了？？？？？？？？？？？？？？？？
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].username == username){
    //            return mock[i];
    //        }
    //    }
    //    return null;
    //}

    function findUserByCredentials(credentials) {
        var deferred = q.defer();

        UserModel.find(credentials, function(err, user){
            deferred.resolve(user);
        });

        return deferred.promise;
    }

    //function findUserByCredentials(credentials){
    //    for (var i = 0; i<mock.length; i++){
    //        if (mock[i].username == credentials.username && mock[i].password == credentials.password){
    //            return mock[i];
    //        }
    //    }
    //    return null;
    //}

};
