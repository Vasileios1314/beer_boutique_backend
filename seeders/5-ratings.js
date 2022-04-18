"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 1,
          rating: 4,
          beerId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          rating: 5,
          beerId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          rating: 4,
          beerId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          rating: 4,
          beerId: 4,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          rating: 4,
          beerId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          rating: 4,
          beerId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          rating: 5,
          beerId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          rating: 3,
          beerId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          rating: 4,
          beerId: 4,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          rating: 3,
          beerId: 4,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          rating: 2,
          beerId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("ratings", null, {});
  },
};
