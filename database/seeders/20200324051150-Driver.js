'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Drivers', 
			[
				{
					full_name: 'Hardo Fernando Silalahi',
					phone_number: '08135557000',
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					full_name: 'Abdul Salim',
					phone_number: '08185598189',
					createdAt: new Date(),
          updatedAt: new Date()
				}
			], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Drivers', null, {});
  }
};
