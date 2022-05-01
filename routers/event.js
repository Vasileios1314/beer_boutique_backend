const { Router } = require("express");
const auth = require("../auth/middleware");
const Events = require("../models").event;
const Business = require("../models").business;
const Users = require("../models").user;
const Userattendance = require("../models").userattendance;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const events = await Events.findAll({
      order: [
        ["start_date", "DESC"],
        ["id", "ASC"],
      ],
    });
    res.send(events);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const eventId = parseInt(req.params.id);
    const event = await Events.findByPk(eventId, {
      include: [Business],
    });
    if (event) {
      res.send(event);
    } else {
      res.status(404).send("Event not found");
    }
  } catch (e) {
    next(e);
  }
});

router.post("/attend", auth, async (req, res, next) => {
  try {
    const { userId, eventId } = req.body;
    console.log("userId", "eventId", userId, eventId);

    const attend = await Userattendance.create({
      userId,
      eventId,
    });
    res.send({ attend });
  } catch (e) {
    next(e);
  }
});

router.delete("/unsubscribe/:eventId", async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const unsubscribe = await Userattendance.destroy({
      where: { eventId },
    });
    res.send("unsubscribe");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
