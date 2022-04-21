"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
