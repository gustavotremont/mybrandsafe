'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('users', [{
        uuid: '5b23b11c-e7bd-4cf3-8b6c-309d5e39dc2f',
        email: 'nike@mail.com',
        password: 'asjdkasjdkjasdlkjaslkdjasld',
        name: 'nike',
        address: 'asdkasdkaskdkasdkasd',
        cif: 'asdkasdkaskdka',
        createdAt: 'Mon Jan 13 2020 16:44:03 GMT+0000',
        updatedAt: 'Mon Jan 13 2020 16:44:03 GMT+0000'
      }, {
        uuid: '41ace8fa-bc70-4eb5-8b89-d93624f30bd0',
        email: 'puma@mail.com',
        password: 'sdlkjaslkdjasld',
        name: 'puma',
        address: 'asdkaskdkasdkasd',
        cif: 'asdkkaskdka',
        createdAt: 'Mon Jan 13 2020 16:44:03 GMT+0000',
        updatedAt: 'Mon Jan 13 2020 16:44:03 GMT+0000'
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};