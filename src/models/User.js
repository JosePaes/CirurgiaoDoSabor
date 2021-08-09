const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            login: DataTypes.STRING,
            passwd: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = User;