"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userattendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userattendance.belongsTo(models.user);
      userattendance.belongsTo(models.event);
    }
  }
  userattendance.init(
    {
      userId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userattendance",
    }
  );
  return userattendance;
};
