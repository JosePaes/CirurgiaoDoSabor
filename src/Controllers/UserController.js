const User = require('../models/User');

module.exports ={
    async CreateUser(req, res){
        const {name, email, login, passwd} = req.body;

        const user = await User.create({name, email, login, passwd})

        return res.json(user);
    },// FInal create user

    async ListaUser(req, res){
        const users = await User.findAll()

        return res.json(users)

    }
}