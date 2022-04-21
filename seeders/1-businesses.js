"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "businesses",
      [
        {
          title: "Beer Pong",
          description: "Beers and Beer Pong.",
          imageUrl:
            "https://www.wanderlustingk.com/wp-content/uploads/2019/01/noord-008190121760081606-1.jpg",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Irish",
          description: "Come for the expirience!",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/0264/5413/0770/files/Brouwerij_Hoop-_restaurant_-_20012_-_V02.00_00_02_10.Still003_600x600.jpg?v=1632297916",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Amsteland",
          description: "By the river.",
          imageUrl:
            "https://streetsidebrewery.com/wp-content/uploads/2019/07/Streetside-Brewery-Exterior-Building.jpg",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fabrikque",
          description: "True expirience.",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5e0371d9c4faa30823a5c83f/68c15e1e-559e-4820-8d52-31ad5d7186bd/beer-12+%282%29.jpg",
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beer Bar",
          description: "The tipical Pub.",
          imageUrl:
            "https://www.tastytales.tv/uploads/resized/7/pics_breweries_jopen_web5.jpeg",
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("businesses", null, {});
  },
};
