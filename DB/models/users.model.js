const {Model,DataTypes, Sequelize} = require("sequelize");
const { USE } = require("sequelize/dist/lib/index-hints");

const USER_TABLE = "users";

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type : DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    }
    
}

class User extends Model{
    static associate(){

    }
    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: "User",
            timestamps: false
        }
    }
}
module.exports = {USER_TABLE, UserSchema, User};