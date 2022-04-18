"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      event.belongsTo(models.business);
      event.hasOne(models.business);
      event.hasMany(models.userattendance);
    }
  }
  event.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING(1000), allowNull: false },
      imageUrl: { type: DataTypes.STRING, allowNull: false },
      start_date: { type: DataTypes.DATE, allowNull: false },
      end_date: { type: DataTypes.DATE, allowNull: false },
      capacity: { type: DataTypes.INTEGER, allowNull: false },
      location: { type: DataTypes.STRING, allowNull: false },
      business_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
