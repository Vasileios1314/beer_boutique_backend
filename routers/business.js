const { Router } = require("express");
const { user } = require("pg/lib/defaults");
const auth = require("../auth/middleware");
const Events = require("../models").event;
const Business = require("../models").business;
const Category = require("../models").category;
const Comments = require("../models").comment;
const Rating = require("../models").rating;
const Beer = require("../models").beer;

const router = new Router();

router.get("/:id", async (req, res) => {
  try {
    const businessId = parseInt(req.params.id);
    const business = await Business.findByPk(businessId, {
      include: [
        Events,
        {
          model: Beer,
          include: [Comments, Rating, Category],
        },
      ],
    });
    if (!business) return res.status(400).send("business not found");
    res.send(business);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/beer", auth, async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      description,
      category,
      alcohoolRate,
      size,
      country,
    } = req.body;

    const userId = req.user.id;

    const findUserBusiness = await Business.findOne({
      where: { userId: userId },
    });

    const response = await Beer.create({
      title,
      imageUrl,
      description,
      country,
      businessId: findUserBusiness.dataValues.id,
      alcohoolRate,
      size,
      categoryId: category,
    });

    return res.status(201).send({ message: "Beer created", response });
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/postEvent", auth, async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      description,
      start_date,
      end_date,
      capacity,
      location,
    } = req.body;

    const userId = req.user.id;

    const findUserBusiness = await Business.findOne({
      where: { userId: userId },
    });

    console.log("user business", findUserBusiness);

    const response = await Events.create({
      title,
      imageUrl,
      description,
      capacity,
      businessId: findUserBusiness.dataValues.id,
      start_date,
      end_date,
      location,
    });

    return res.status(201).send({ message: "Event created", response });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
