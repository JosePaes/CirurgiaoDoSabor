'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {  
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      zipcode:{
        type: Sequelize.STRING,
        allowNull: false
      },
      rua:{
        type: Sequelize.STRING,
        allowNull: false
      },
      bairro:{
        type: Sequelize.STRING,
        allowNull: false
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false
      },
      pais:{
        type: Sequelize.STRING,
        allowNull: false
      }

    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos');
    
  }
};
