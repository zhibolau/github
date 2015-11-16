var mock = require("./user.mock.json");
var guid = require("guid");


module.exports = function(app) {
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
        mock.push(user);
        return mock;
    }

    function FindAll(){
        return mock;
    }

    function FindById(id){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].id = id){
                return (mock[i]);
            }
        }
        return null;
    }

    function Update(id, user){
        var newUser = FindById(id);
        if (newUser != null) {
            newUser.username = user.username;
            newUser.password = user.password;
            newUser.email = user.email;
            newUser.firstName = user.firstName;
            newUser.lastName = user.lastName;

            return newUser;
        }
        return null;
    }

    function Delete(id){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].id == id){
                mock.splice(i,1);
            }
        }
        return mock;
    }

    function findUserByUsername(username){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].username == username){
                return mock[i];
            }
        }
        return null;
    }

    function findUserByCredentials(credentials){
        for (var i = 0; i<mock.length; i++){
            if (mock[i].username == credentials.username && mock[i].password == credentials.password){
                return mock[i];
            }
        }
        return null;
    }

};
