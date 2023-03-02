const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

    sequelize.define('Car', {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    year :{
        type: DataTypes.INTEGER,
        allowNull : true
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull : true
    },
    img:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    power:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    transmission:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    drive:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    capacity:{
        type: DataTypes.STRING,
        allowNull: true,
    },

    createInDb: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
});
};
