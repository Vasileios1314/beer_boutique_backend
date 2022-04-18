"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userattendances",
      [
        {
          user_id: 1,
          event_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          event_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          event_id: 2,
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
