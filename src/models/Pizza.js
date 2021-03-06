const {Model, DataTypes} = require('sequelize');

class Pizza extends Model{
    static init (sequelize){
        super.init({
            nome: DataTypes.STRING,
            ingredientes: DataTypes.STRING,
            preco: DataTypes.DECIMAL
        }, {
            sequelize
        })
    }
}

module.exports = Pizza;