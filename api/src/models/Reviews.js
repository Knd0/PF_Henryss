const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Reviews', {
    reviewId:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    userId:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
