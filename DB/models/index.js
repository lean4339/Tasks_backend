const {Task, TaskSchema} = require("./task.model");
const {User, UserSchema} = require("./users.model");
function setupModels(sequelize){
    Task.init(TaskSchema,Task.config(sequelize));
    User.init(UserSchema,User.config(sequelize));
}

module.exports= setupModels;