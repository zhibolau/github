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

        UserModel.create(user, function(err, user) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }


    function FindAll() {
        var deferred = q.defer();

        UserModel.find(function(err, users){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(users);
            }
        });

        return deferred.promise;
    }

    function FindById(id) {
        var deferred = q.defer();

        UserModel.findById(id, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }


    function Update(id, user) {
        var deferred = q.defer();

        UserModel.update(
            {_id: id},
            {$set:
            {
                firstName : user.firstName,
                lastName : user.lastName,
                username : user.username,
                password : user.password,
            },
            },
            function(err, result) {
                UserModel.findOne({_id : id}, function(err, result) {
                    deferred.resolve(result);
                });
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

        UserModel.findOne({username: username}, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }



    function findUserByCredentials(credentials) {
        var deferred = q.defer();

        UserModel.findOne({
            username: credentials.username,
            password: credentials.password
        }, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }



};
