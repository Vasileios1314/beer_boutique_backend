"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "beers",
      [
        {
          title: "Guinness",
          description: "Sint quis ",
          imageUrl:
            "https://cdn.webshopapp.com/shops/133932/files/359227862/guinness-foreign-extra-stout-75-330ml.jpg",
          businessId: 1,
          categoryId: 1,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Irland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hoegarden",
          description: "Sint quis ",
          imageUrl:
            "https://www.bigbasket.com/media/uploads/p/l/40201232_3-hoegaarden-beer.jpg",
          businessId: 1,
          categoryId: 1,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Belgium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Singha",
          description: "Sint quis ",
          imageUrl:
            "http://static.rcgroups.net/forums/attachments/7/2/0/9/9/a1611226-110-singha.136161615_std%5B1%5D.png?d=1197493537",
          businessId: 1,
          categoryId: 1,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Thailand",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Stella Artois",
          description: "Sint quis ",
          imageUrl:
            "https://www.eckeroline.com/media/catalog/product/cache/c6a153240b9d57769ada9a8b348b002a/s/t/stella_artois_33cl_34223.png",
          businessId: 2,
          categoryId: 3,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Belgium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chang",
          description: "Sint quis ",
          imageUrl: "http://www.femail.com.au/graphics/changbeer1.jpg",
          businessId: 2,
          categoryId: 1,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Thailand",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Steel Reserve",
          description: "Sint quis ",
          imageUrl:
            "https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/blt05f4c3d3a72c939f/60a2ca47ae6c8a6e290a5699/Steel_Reserve_bottle_1800x1800_transparent.png",
          businessId: 2,
          categoryId: 1,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "US",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Affligem Blonde",
          description: "Sint quis ",
          imageUrl:
            "https://www.affligembeer.com/media/1301/affligem-blond-fles-en-glas-900x900px.png?quality=75",
          businessId: 3,
          categoryId: 1,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Belgium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Affligem Dubbel",
          description: "Sint quis ",
          imageUrl:
            "https://www.affligembeer.com/media/1303/affligem-dubbel-fles-en-glas-900x900px.png?quality=75",
          businessId: 3,
          categoryId: 2,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Belgium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Affligem Tripel",
          description: "Sint quis ",
          imageUrl:
            "https://www.sligro.nl/image-service/_jcr_content.product.08712000048433.image/1/large.jpeg",
          businessId: 3,
          categoryId: 3,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Belgium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chimay Rouge",
          description: "Sint quis ",
          imageUrl: "https://chimay.com/chimay-rouge/build/img/home-intro.jpg",
          businessId: 4,
          categoryId: 2,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Irland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "St Bernardus Abt 12",
          description: "Sint quis ",
          imageUrl:
            "https://static.ah.nl/dam/product/AHI_43545239353733343835?revLabel=22&rendition=800x800_JPG_Q90&fileType=binary",
          businessId: 4,
          categoryId: 3,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Irland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Chimay Tripel",
          description: "Sint quis ",
          imageUrl:
            "https://www.biernet.nl/images/merken/77043-Chimay%20Tripel%20met%20een%20kaasje%20ernaast.jpg",
          businessId: 4,
          categoryId: 3,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Irland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rochefort 6",
          description: "Sint quis ",
          imageUrl:
            "https://cdn.webshopapp.com/shops/65337/files/84613613/trappistes-rochefort-6.jpg",
          businessId: 5,
          categoryId: 3,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Irland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rochefort 8",
          description: "Sint quis ",
          imageUrl:
            "https://cdn.webshopapp.com/shops/65337/files/84613574/trappistes-rochefort-8.jpg",
          businessId: 5,
          categoryId: 2,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Irland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rochefort 10",
          description: "Sint quis ",
          imageUrl:
            "https://beerstorexl.com/wp-content/uploads/2020/04/23290_rochefort_10_33cl.png",
          businessId: 5,
          categoryId: 2,
          alcohoolRate: 5,
          size: 250,
          likes: 0,
          country: "Irland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("beers", null, {});
  },
};
