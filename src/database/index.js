const Sequelize = require('sequelize');
const dbconfig = require('../config/database')

const User = require('../models/User');
const Pizza = require('../models/Pizza');

const connection = new Sequelize(dbconfig);
User.init(connection);
Pizza.init(connection)

module.exports = connection;