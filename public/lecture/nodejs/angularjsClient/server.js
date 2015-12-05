/**
 * Created by Zhibo LIU on 2015/11/5.
 */
module.exports = function(app){
    var users = [
        {first: "a", last:"b", username: 'a', email: 'a@163.com'},
        {first: "a1", last:"b1", username: 'a1', email: 'a1@163.com'},
        {first: "a2", last:"b2", username: 'a2', email: 'a2@163.com'},
        {first: "a3", last:"b3", username: 'a3', email: 'a3@163.com'}
    ];

    app.get('/api/user', function(req, res){
        res.json(users);
    });
    
    app.get('/api/user/:id', function(req,res){
        var index = req.params.id;
        res.json(users[index]);
    });

    app.delete('/api/user/:id', function(req,res){
        var index = req.params.id;
        users.splice(index, 1);
        res.json(users);
    });

    app.post('/api/user', function(req,res){
        var user = req.body;
        users.push(user);
        res.json(users);
    });

    app.put('/api/user/:id', function(req,res){
        var index = req.params.id;
        users[index].first; //不知道写什么了？？？？？？？？？？？？？
    })
};