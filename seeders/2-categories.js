"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          id: 1,
          title: "Black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "Blonde",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
