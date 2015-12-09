var q = require("q");

var guid = require("guid");


module.exports = function(mongoose, db) {
    var pUserSchema = require("./user.schema.js")(mongoose);
    var pUserModel = mongoose.model("pUserModel", pUserSchema);



    var api = {
        createUser: createUser,
        findAllUsers: findAllUsers,
        findUserById: findUserById,
        updateUserById: updateUserById,
        deleteUserById: deleteUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    }
    return api;

    function createUser(user){
        var deferred = q.defer();

        pUserModel.create(user, function(err, user) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }


    function findAllUsers() {
        var deferred = q.defer();

        pUserModel.find(function(err, users){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(users);
            }
        });

        return deferred.promise;
    }

    function findUserById(id) {
        var deferred = q.defer();

        pUserModel.findById(id, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }


    function updateUserById(id, user) {
        var deferred = q.defer();

        pUserModel.update(
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
                pUserModel.findOne({_id : id}, function(err, result) {
                    deferred.resolve(result);
                });
            });

        return deferred.promise;
    }



    function deleteUserById(id) {
        var deferred = q.defer();

        pUserModel.remove({_id: id}, function(err, status) {
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

        pUserModel.findOne({username: username}, function(err, user){
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

        pUserModel.findOne({
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
