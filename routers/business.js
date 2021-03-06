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
    const userId = parseInt(req.params.id);
    const business = await Business.findOne({
      where: { id: userId },
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

router.get("/", async (req, res) => {
  try {
    const business = await Business.findAll();

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
      likes,
    } = req.body;

    const userId = req.user.id;

    const findUserBusiness = await Business.findOne({
      where: { userId: userId },
    });

    if (
      !title ||
      !imageUrl ||
      !description ||
      !category ||
      !alcohoolRate ||
      !size ||
      !country
    )
      return res.status(400).send("Please complete all the inputs!");

    const response = await Beer.create({
      title,
      imageUrl,
      description,
      country,
      businessId: findUserBusiness.dataValues.id,
      alcohoolRate,
      size,
      categoryId: category,
      likes: 0,
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

    const business = await Business.findOne({
      where: { userId: userId },
    });

    if (
      !title ||
      !imageUrl ||
      !description ||
      !start_date ||
      !end_date ||
      !capacity ||
      !location
    )
      return res.status(400).send("Please complete all the inputs!");

    if (!business)
      return res.status(400).send("This user is not the owner of the business");

    const response = await Events.create({
      title,
      imageUrl,
      description,
      capacity,
      businessId: business.dataValues.id,
      start_date,
      end_date,
      location,
    });

    return res.status(201).send({ message: "Event created", response });
  } catch (err) {
    return res.send({ error: err });
  }
});

router.post("/comment/:beerId", auth, async (req, res) => {
  try {
    const { id } = req.user;
    const { comment } = req.body;
    const { beerId } = req.params;

    if (!comment) return res.status(400).send("Comment cannot be empty");

    if (comment.length > 10000)
      res.status(400).send("comment cannot be longer than 10000 characters");

    const beer = await Beer.findByPk(beerId);
    if (!beer) return res.status(400).send("Beer does not exist");

    const newComment = await Comments.create({
      comment,
      beerId,
      userId: id,
    });

    return res.status(201).send(newComment);
  } catch (e) {
    console.log(e.message);
  }
});

router.delete("/deleteevent/:eventId", async (req, res, next) => {
  try {
    const { eventId } = req.params;
    await Events.destroy({
      where: { id: eventId },
    });
    res.send("Event deleted");
  } catch (e) {
    next(e);
  }
});

router.patch("/beer/:id", auth, async (req, res) => {
  try {
    const beerLikes = await Beer.findByPk(req.params.id);

    const { likes } = req.body;

    await beerLikes.update({ likes });

    return res.status(200).send({ beerLikes });
  } catch (err) {
    console.log(err.message);
  }
});

router.delete("/deletebeer/:beerId", async (req, res, next) => {
  try {
    const { beerId } = req.params;
    await Beer.destroy({
      where: { id: beerId },
    });
    res.send("Beer deleted");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
