"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      beer.belongsTo(models.business);
      beer.hasMany(models.rating);
      beer.hasMany(models.comment);
      beer.belongsTo(models.category);
      beer.hasOne(models.category);
    }
  }
  beer.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING(1000), allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      businessId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      alcohoolRate: { type: DataTypes.INTEGER, allowNull: false },
      size: { type: DataTypes.INTEGER, allowNull: false },
      country: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "beer",
    }
  );
  return beer;
};
