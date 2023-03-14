const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Reviews', {
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
  });
};
