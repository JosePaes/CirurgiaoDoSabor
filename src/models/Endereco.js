const {Model, DataTypes} = require('sequelize')

class Endereco extends Model{
    static init(sequelize){
        super.init({
            zipcode: DataTypes.STRING,
            rua: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            pais: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Endereco;