var mock = require("../data/mock.json");
module.exports = function () {
    var api = {
        findAllUsers: findAllUsers,
        findUserById: findUserById,
        findAllMoviesForUser:findAllMoviesForUser,
        userLikesMovie:userLikesMovie
    };
    return api;

    function findAllUsers(){
        return mock;
    }

    function findUserById(){
        for(var i=0; i < mock.length; i++){
            if(mock[i].id == id){
                return mock[i];
            }
        }
    }

    function findAllMoviesForUser(){

    }

    function userLikesMovie(userId, idIMDB){
        var user = findUserById(userId);
        user.likes.push({'idIMDB': idIMDB});
    }


};