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
