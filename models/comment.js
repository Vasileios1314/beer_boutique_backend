"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // comment.hasOne(models.beer);
      comment.belongsTo(models.beer);
      comment.belongsTo(models.user);
    }
  }
  comment.init(
    {
      comment: { type: DataTypes.STRING(1000), allowNull: false },
      beerId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
