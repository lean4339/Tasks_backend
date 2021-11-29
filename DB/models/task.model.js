const {Model,DataTypes, Sequelize} = require("sequelize");

const TASKS_TABLE = "tasks";

const TaskSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    completed: {
        allowNull: false,
        type : DataTypes.BOOLEAN
    }
    
}

class Task extends Model{
    static associate(){

    }
    static config(sequelize){
        return {
            sequelize,
            tableName: TASKS_TABLE,
            modelName: "Task",
            timestamps: false
        }
    }
}
module.exports = {TASKS_TABLE, TaskSchema, Task};