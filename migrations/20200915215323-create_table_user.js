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
      password:{
        type:Sequelize.STRING(255),
        allowNull:false
      },
      create_at:Sequelize.DATE,
      update_at:Sequelize.DATE,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
