const Pizza = require('../models/Pizza');

module.exports = {
    async CreatePizza(req, res){
        const {nome, ingredientes, preco} = req.body;
        
        const pizza = await Pizza.create({nome, ingredientes, preco})

        return res.json(pizza)
    },
    async ListaPizza(req, res){
        const pizzas = await Pizza.findAll();

        return res.json(pizzas)

    }
}