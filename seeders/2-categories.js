"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          title: "Black",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Blonde",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
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
