const Sequelize = require('sequelize');
const { ne } = require('sequelize/types/lib/operators');
const dbconfig = require('../config/database')

const connection = new Sequelize(dbconfig);

module.exports = connection;