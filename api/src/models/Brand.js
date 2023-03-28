const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Brand', {
        id:{
        type: DataTypes.INTEGER,
        primaryKey: true
        },
        brand: {
        type: DataTypes.STRING,
        allowNull: true,
        }
    });
};
