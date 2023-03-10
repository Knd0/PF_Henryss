const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Payments", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM({
        values: [
          "created",
          "processing",
          "canceled",
          "completed",
        ],
      }),
      allowNull: false,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    items: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  });
};