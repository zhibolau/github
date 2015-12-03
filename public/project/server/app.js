module.exports = function (app, mongoose, db){
    var userModel = require("./models/user.model.js")(mongoose, db);
    var formModel = require("./../notInUse/form.model.js")(mongoose, db);
    //var modelUser = require("./models/user.model.js");
    //var modelForm = require("./models/form.model.js");


    require("./services/user.service.js")(app, userModel);
    require("./../notInUse/form.service.js")(app, formModel);
    require("./../notInUse/field.service.js")(app, formModel);


    //require("./services/user.service.js")(app);
    //require("./services/form.service.js")(app);
    //require("./services/field.service.js")(app, modelForm);
};