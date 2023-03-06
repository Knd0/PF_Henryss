const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('User', {
    userId:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        require: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
    },
    admin: {
        type: DataTypes.BOOLEAN,
        default: false,
},
active: {
        type: DataTypes.BOOLEAN,
        default: true,
},

    });
};