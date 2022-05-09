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
          description: "New flavors",
          start_date: new Date("2022-08-17T03:24:00"),
          end_date: new Date("2022-08-17T12:24:00"),
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
          description: "New flavors",
          start_date: new Date("2022-09-17T03:24:00"),
          end_date: new Date("2022-09-17T08:24:00"),
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
          description: "Enjoy the taste",
          start_date: new Date("2022-09-15T03:24:00"),
          end_date: new Date("2022-09-15T10:24:00"),
          capacity: 100,
          location: "Athens",
          businessId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Here we Go!",
          imageUrl:
            "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Feb86b19ba1e73af8c6910c8f5b6b6edbf43a2205",
          description: "Enjoy the taste",
          start_date: new Date("2022-10-17T03:24:00"),
          end_date: new Date("2022-10-17T10:24:00"),
          capacity: 100,
          location: "London",
          businessId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Honor to Bavaria!",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNbLgEHtPcIe_NDnxWf6aIequfq_tRYnkUA&usqp=CAU",
          description: "Unlimited party",
          start_date: new Date("2022-08-01T03:24:00"),
          end_date: new Date("2022-08-01T10:24:00"),
          capacity: 100,
          location: "Paris",
          businessId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beer Tour",
          imageUrl:
            "https://manchestersightseeingtours.com/wp-content/uploads/Robinsons-Brewery-Stockport-Greater-Manchester-Visitors-Centre_Restored-Copper_NCN-e1512036240742-527x350.jpg",
          description: "Is coming back",
          start_date: new Date("2022-08-01T03:24:00"),
          end_date: new Date("2022-08-01T10:24:00"),
          capacity: 100,
          location: "Paris",
          businessId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Irish Tour",
          imageUrl:
            "https://www.nj.com/resizer/Rb70yy_JCE7TcCs8kjnM45nh_J0=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/drinks/photo/top-10-irish-beers-on-tapjpg-35d9bfc3eb34dd5c.jpg",
          description: "Is coming back",
          start_date: new Date("2022-08-01T03:24:00"),
          end_date: new Date("2022-08-01T10:24:00"),
          capacity: 100,
          location: "Antwerp",
          businessId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "German Tour",
          imageUrl:
            "https://assets.epicurious.com/photos/588652b31770e18408055204/master/pass/beers-in-pub-012317.jpg",
          description: "Is coming back",
          start_date: new Date("2022-08-01T03:24:00"),
          end_date: new Date("2022-08-01T10:24:00"),
          capacity: 100,
          location: "Antwerp",
          businessId: 4,
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
