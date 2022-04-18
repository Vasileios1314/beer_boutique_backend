"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      business.belongsTo(models.user);
      business.hasMany(models.beer);
      business.hasMany(models.event);
    }
  }
  business.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING(1000), allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "business",
    }
  );
  return business;
};
