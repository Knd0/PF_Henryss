const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('User', {
        username: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            require: true
        },
        name: {
            type: String,
        },
        image: {
            type: Array,
        },
        admin: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: true,
        }
    });
};