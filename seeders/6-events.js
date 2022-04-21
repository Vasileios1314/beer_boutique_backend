"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          title: "The best tasting in the city.",
          imageUrl:
            "https://wynz.nl/wp-content/uploads/2019/11/wijnfeest-min.jpg",
          description: "Pariatur nostrud laboris eu id minim exercitation.",
          start_date: new Date("1994-12-17T03:24:00"),
          end_date: new Date("1995-12-17T03:24:00"),
          capacity: 10,
          location: "Amsterdam",
          businessId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "True tasting EXP",
          imageUrl:
            "https://weedseedshop.com/blog/wp-content/uploads/10-best-strains-for-parties-and-socializing-WeedSeedShop-1-1024x540.jpg",
          description: "Pariatur nostrud laboris eu id minim exercitation.",
          start_date: new Date("1996-12-17T03:24:00"),
          end_date: new Date("1997-12-17T03:24:00"),
          capacity: 20,
          location: "Berlin",
          businessId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Come for the Party!",
          imageUrl:
            "https://www.buitenplaatsvlaardingen.nl/buitenplaats2017/wp-content/uploads/2014/08/feest-vieren-vlaardingen.jpg",
          description: "Pariatur nostrud laboris eu id minim exercitation.",
          start_date: new Date("1991-12-17T03:24:00"),
          end_date: new Date("1992-12-17T03:24:00"),
          capacity: 100,
          location: "Athens",
          businessId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("events", null, {});
  },
};
