var q = require("q");
var guid = require("guid");


module.exports = function(mongoose, db) {
    var userSchema = require("./user.schema.js")(mongoose);
    var ProjectUserModel = mongoose.model("ProjectUserModel", userSchema);



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

        ProjectUserModel.create(user, function(err, doc){
            ProjectUserModel.find(function(err, users){
                deferred.resolve(users);
            });
        });
        return deferred.promise;
    }


    function FindAll() {
        var deferred = q.defer();

        ProjectUserModel.find(function(err, users){
            deferred.resolve(users);
        });

        return deferred.promise;
    }

    function FindById(id) {
        var deferred = q.defer();

        ProjectUserModel.find(id, function(err, user){
            deferred.resolve(user);
        });

        return deferred.promise;
    }


    function Update(id, user) {
        var deferred = q.defer();

        user.delete("_id");

        ProjectUserModel.update({_id: id}, {$set: user}, function(err, user) {
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

        ProjectUserModel.remove({_id: id}, function(err, status) {
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

        ProjectUserModel.find(username, function(err, user){
            deferred.resolve(user);
        });



        return deferred.promise;
    }



    function findUserByCredentials(credentials) {
        var deferred = q.defer();

        ProjectUserModel.find(credentials, function(err, user){
            deferred.resolve(user);
        });



        return deferred.promise;
    }



};
