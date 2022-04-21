"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          imageUrl:
            "https://images0.persgroep.net/rcs/ktjWgJ82MAokqRpqDxVcZ3VfUgA/diocontent/169982699/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8",
          createdAt: new Date(),
          updatedAt: new Date(),
          isBusiness: true,
        },
        {
          name: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          imageUrl:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSZjIhQYJAKltl9QjqqSQ4vjk9goWnXTt1zjNaTF4gYzdoGTYOj",
          createdAt: new Date(),
          updatedAt: new Date(),
          isBusiness: true,
        },
        {
          name: "Mopie ",
          email: "mo@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          imageUrl:
            "https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/croppedGettyImages6957135006XDLjpg_0.JPEG",
          createdAt: new Date(),
          updatedAt: new Date(),
          isBusiness: true,
        },
        {
          name: "Las",
          email: "mea@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          imageUrl:
            "https://i.insider.com/5cc865c7a9224302f54ed4b2?width=750&format=jpeg&auto=webp",
          createdAt: new Date(),
          updatedAt: new Date(),
          isBusiness: true,
        },
        {
          name: "Korie",
          email: "kor@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          imageUrl:
            "https://www.mrdustbin.com/us/wp-content/uploads/2021/11/Tom-Holland.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          isBusiness: true,
        },
        {
          name: "dum",
          email: "dum@d.com",
          password: bcrypt.hashSync("dum1234", SALT_ROUNDS),
          imageUrl:
            "https://cdn.britannica.com/86/209486-050-C862920A/Kyriakos-Mitsotakis-2019.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          isBusiness: false,
        },
        {
          name: "bill",
          email: "bill@b.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d3/Bill_Clinton.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          isBusiness: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
