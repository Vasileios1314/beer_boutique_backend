"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userattendances",
      [
        {
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userattendances", null, {});
  },
};
