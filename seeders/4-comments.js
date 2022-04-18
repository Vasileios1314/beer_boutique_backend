"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          id: 1,
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          comment:
            "Aliquip et irure voluptate in voluptate cupidatat in sunt excepteur ad esse deserunt adipisicing.",
          beerId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
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
