"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userattendances",
      [
        {
          id: 1,
          userId: 1,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userId: 2,
          eventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          userId: 1,
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
