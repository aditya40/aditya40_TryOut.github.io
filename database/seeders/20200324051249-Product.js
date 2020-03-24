'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Products', 
			[
				{
					name: 'Laptop LENOVO T410i CORE I5 M520',
					price: 2795000,
					createdAt: new Date(),
          updatedAt: new Date()
				},
				{
					name: 'LAPTOP HP14s-dk0073/CM0101 AMD A4/4GB/1TB WIN10',
					price: 3500000,
					createdAt: new Date(),
          updatedAt: new Date()
				}
			], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
