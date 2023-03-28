const { getAllCars } = require('./carsControllers');
const { getUsersDb } = require('./usersControllers');


const getCarsStatistics = async () => {
    const objetos = await getAllCars()
    const estadisticaPorMes = new Map();

objetos.forEach(objeto => {
    const fechaCreacion = new Date(objeto.createdAt);
    const mesCreacion = fechaCreacion.getMonth() + 1;
    const anioCreacion = fechaCreacion.getFullYear();
    const clave = `${mesCreacion}-${anioCreacion}`;

    if (estadisticaPorMes.has(clave)) {
    estadisticaPorMes.set(clave, estadisticaPorMes.get(clave) + 1);
    } else {
    estadisticaPorMes.set(clave, 1);
    }
});
const estadisticaPorMesObj = Object.fromEntries(estadisticaPorMes);
    return estadisticaPorMesObj;
}

const getUsersStatistics = async () => {
    const objetos = await getUsersDb();
    const estadisticaPorMes = new Map();

objetos.forEach(objeto => {
    const fechaCreacion = new Date(objeto.createdAt);
    const mesCreacion = fechaCreacion.getMonth() + 1;
    const anioCreacion = fechaCreacion.getFullYear();
    const clave = `${mesCreacion}-${anioCreacion}`;

    if (estadisticaPorMes.has(clave)) {
    estadisticaPorMes.set(clave, estadisticaPorMes.get(clave) + 1);
    } else {
    estadisticaPorMes.set(clave, 1);
    }
});
const estadisticaPorMesObj = Object.fromEntries(estadisticaPorMes);
return estadisticaPorMesObj;
}




module.exports = {
    getCarsStatistics,
    getUsersStatistics
}
