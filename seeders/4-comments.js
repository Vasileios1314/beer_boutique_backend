"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          comment: "Fantastic",
          beerId: 7,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Wow",
          beerId: 13,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "10/10",
          beerId: 11,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "The taste was super nice.",
          beerId: 10,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Dum flavor...",
          beerId: 8,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "can be better..",
          beerId: 9,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Was rediculous.",
          beerId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Check!!",
          beerId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "One more drunk night!",
          beerId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "Nice!",
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
