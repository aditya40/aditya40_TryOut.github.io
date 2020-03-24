'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Customers', 
			[
				{
					full_name: 'Mia Huljanah',
					username: 'miahun',
					email: 'miahun@fakemail.com',
					phone_number: '08155559890',
					createdAt: new Date(),
          updatedAt: new Date()
				},
				{
					full_name: 'Rashif Ilmi Nurzaman',
					username: 'rashzam',
					email: 'rashzam@fakemail.com',
					phone_number: '0812598837',
					createdAt: new Date(),
          updatedAt: new Date()
				}
			], {});
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Customers', null, {});
  }
};
