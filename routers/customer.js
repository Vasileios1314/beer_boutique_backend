const { Router } = require("express");
const auth = require("../auth/middleware");
const Event = require("../models").event;
const User = require("../models").user;
const Userattendance = require("../models").userattendance;

const router = new Router();

router.get("/profile", auth, async (req, res) => {
  const { user } = req;
  const profile = await User.findByPk(user.id, { include: [Event] });

  delete profile.dataValues["password"]; // don't send back the password hash

  res.status(200).send(profile);
});

module.exports = router;
