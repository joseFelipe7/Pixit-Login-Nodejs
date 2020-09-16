'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('token', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      hash:{
        type:Sequelize.STRING(255),
        allowNull:false
      },
      use:{
        type:Sequelize.INTEGER(1),
        allowNull:false
      },
      fk_user:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('token');
  }
};
