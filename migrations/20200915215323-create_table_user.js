'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      name:{
        type:Sequelize.STRING(120),
        allowNull:false
      },
      email:{
        type:Sequelize.STRING(120),
        allowNull:false
      },
      password:{
        type:Sequelize.STRING(255),
        allowNull:false
      },
      createdAt:Sequelize.DATE,
      updatedAt:Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
