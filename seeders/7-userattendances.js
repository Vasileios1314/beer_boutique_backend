"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userattendances",
      [
        {
          eventId: 1,
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 3,
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          eventId: 2,
          userId: 7,
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
