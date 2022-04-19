"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasOne(models.business);
      user.hasMany(models.comment);
      user.hasMany(models.rating);
      user.belongsToMany(models.event, {
        through: "userattendance",
        foreignKey: "userId",
      });
      // user.hasMany(models.userattendance);
    }
  }
  user.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isBusiness: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
