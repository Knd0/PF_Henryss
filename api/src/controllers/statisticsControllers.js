const { getAllCars } = require('./carsControllers');
const { getUsersDb } = require('./usersControllers');


const getCarsStatistics = async () => {
    const objetos = await getAllCars();
    const estadisticas = {};
    objetos.forEach((objeto) => {
    const fechaCreacion = new Date(objeto.createdAt).toDateString();
    if (!estadisticas[fechaCreacion]) {
    estadisticas[fechaCreacion] = [];
    }
    estadisticas[fechaCreacion].push(objeto);
});

const resultados = [];
for (const fechaCreacion in estadisticas) {
    const cantidad = estadisticas[fechaCreacion].length;
    resultados.push({ fechaCreacion, cantidad });
}

const tablaEstadistica = crearTablaEstadistica(estadisticas);

    console.table(resultados);
    return { table: tablaEstadistica };
}

const getUsersStatistics = async () => {
    const objetos = await getUsersDb();
    const estadisticas = {};
    objetos.forEach((objeto) => {
    const fechaCreacion = new Date(objeto.createdAt).toDateString();
    if (!estadisticas[fechaCreacion]) {
    estadisticas[fechaCreacion] = [];
    }
    estadisticas[fechaCreacion].push(objeto);
});

const resultados = [];
for (const fechaCreacion in estadisticas) {
    const cantidad = estadisticas[fechaCreacion].length;
    resultados.push({ fechaCreacion, cantidad });
}

const tablaEstadistica = crearTablaEstadistica(estadisticas);

    console.table(resultados);
    return { table: tablaEstadistica };
}

function crearTablaEstadistica(estadisticas) {
    let tabla = '<table><thead><tr><th>Fecha de Creación</th><th>Cantidad de Objetos</th></tr></thead><tbody>';

    for (const fechaCreacion in estadisticas) {
        const cantidad = estadisticas[fechaCreacion].length;
        tabla += `<tr><td>${fechaCreacion}</td><td>${cantidad}</td></tr>`;
    }

    tabla += '</tbody></table>';

    return tabla;
}



module.exports = {
    getCarsStatistics,
    getUsersStatistics
}