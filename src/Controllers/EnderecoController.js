const Endereco = require('../models/Endereco')

module.exports ={
    async CreateEndereco(req, res){
        const {zipcode, rua, bairro, cidade, estado, pais} = req.body;

        const endereco = await Endereco.create({zipcode, rua, bairro, cidade, estado, pais})

        return res.json(endereco);
    }
}