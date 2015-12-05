var q = require("q");

var guid = require("guid");


module.exports = function(mongoose, db) {
    var userSchema = require("./user.schema.js")(mongoose);
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



    function findUserByUsername(username) {
        var deferred = q.defer();

        UserModel.findById(username, function(err, user){
            deferred.resolve(user);
        });



        return deferred.promise;
    }



    function findUserByCredentials(credentials) {
        var deferred = q.defer();

        UserModel.findById(credentials, function(err, user){
            deferred.resolve(user);
        });



        return deferred.promise;
    }



};
