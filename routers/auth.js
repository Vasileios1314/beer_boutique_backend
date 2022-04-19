const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");
const Business = require("../models/").business;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email }, include: [Business] });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }
    const business = user.business;

    delete user.dataValues["password"]; // don't send back the password hash
    delete user.dataValues["business"];
    const token = toJWT({ userId: user.id });
    return res
      .status(200)
      .send({ token, ...user.dataValues, businessId: business && business.id });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  // const { email, password, name, imageUrl, isBusiness } = req.body;
  const { user, business } = req.body;

  const { email, password, name, imageUrl, isBusiness } = user;

  if (!email || !password || !name || !imageUrl) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      name,
      imageUrl,
      isBusiness,
      password: bcrypt.hashSync(password, 10),
    });

    // create the business
    // with the userId of the just created user

    let newBusiness;
    if (isBusiness) {
      const { title, description, imageUrl: businessImg } = business;
      console.log("business", business, newUser.id);
      newBusiness = await Business.create({
        title,
        description,
        imageUrl: businessImg,
        userId: newUser.id,
      });
    }

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({
      token,
      ...newUser.dataValues,
      businessId: isBusiness ? newBusiness.id : undefined,
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      console.log("what is this error actually?", error);
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

module.exports = router;
