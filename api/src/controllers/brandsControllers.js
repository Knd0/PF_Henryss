const { Brand } = require('../db')
const data = require('../../cards.json')



const getApiBrands = async () => {
    let response = data.map((car) => {
        return {
            id: car.id,
            name: car.name,

        }
    })
    return await  response
}

const brandsToDb = async () => {
    const brands = await Brand.findAll();
    if(!brands.length){
        const info = await getApiBrands()
        await Brand.bulkCreate(info)
    } else {
        return ('No se pudo copiar la info a la base de datos')
    }
}

const getBrandsDb = async () => {
    const dbInfo = await brandsToDb()
    let totalBrands = await Brand.findAll()
    return totalBrands
}

module.exports = {
    getBrandsDb
}