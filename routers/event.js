const { Router } = require("express");
const auth = require("../auth/middleware");
const Events = require("../models").event;
const Business = require("../models").business;
const Users = require("../models").user;
const Userattendance = require("../models").userattendance;
const Beer = require("../models").beer;
const Category = require("../models").category;
const Comments = require("../models").comment;
const Rating = require("../models").rating;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const events = await Events.findAll({
      include: [Business],
    });
    res.send(events);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;

// router.get("/", async (req, res) => {
//   try {
//     const events = await Business.findAll({
//       include: [Events, { model: Beer, include: [Comments, Rating] }],
//     });
//     res.send(events);
//   } catch (e) {
//     console.log(e.message);
//   }
// });
