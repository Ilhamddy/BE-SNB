'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {[
    queryInterface.addColumn(
      'User', // table name
      'roleId', // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: 'Role', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
       
      },
    )
  ]
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('User', 'roleId'),
    ]);
  }
};