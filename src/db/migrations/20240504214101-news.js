'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {[
    queryInterface.addColumn(
      'News', // table name
      'source', // new field name
      {
        type: Sequelize.STRING,
        allowNull: true,
       
      },
    )
  ]
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('News', 'source'),

    ]);
  }
};
