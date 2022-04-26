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
    // TODO: get the average from DB instead of ratings and then calculate average...

    const addRatingToBeer = (beer) => {
      const averageRating =
        beer.ratings.reduce((a, b) => a + b.rating, 0) / beer.ratings.length;

      beer.dataValues.averageRating = averageRating;
    };

    business.beers.forEach((beer) => {
      addRatingToBeer(beer);
    });

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

    const business = await Business.findOne({
      where: { userId: userId },
    });

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

router.post("/rating/:beerId", auth, async (req, res) => {
  try {
    const { beerId } = req.params;
    const { rating } = req.body;
    const { id } = req.user;

    const ratings = [1, 2, 3, 4, 5];
    if (!rating || !ratings.includes(rating))
      return res.status(400).send("Rating has to be 1-5");

    const beer = await Beer.findByPk(beerId);

    if (!beer) return res.status(400).send("Beer does not exist");

    // check if user has already rating for this beer.
    // if it does, return error (new rating will NOT be created)
    const userRating = await Rating.findOne({ where: { userId: id } });
    console.log("userRating", userRating.dataValues);
    if (userRating) return res.status(400).send("rating already existest");

    const newRating = await Rating.create({
      rating,
      beerId,
      userId: id,
    });

    return res.status(201).send({ message: "Rating created", newRating });
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
