const { Car, Brand } = require('../db')

const getUsersDb = async () => {
    return ('ruta get all users')
    // return await Car.findAll({
    //     include: [
    //         {
    //             model: Brand,
    //             attributes: ['brand'],
    //             through: {
    //                 attributes: []
    //             }

    //         }
    //     ]
    // })
}

const getUserDb = async (brand) => {
    return ('Ruta get user')
    // const data = await getAllCars();
    // const filteredCars = data.filter((car) => car.brand.toLowerCase().includes(brand.toLowerCase()));

    // return filteredCars
}

const createUserDb = ( brand, model, year, price, img ) => {
    return('Ruta crear usuario')
    // if(!brand || !model || !year || !price || !img) return ("Misssing info")
    // let searchCar = Car.findOne({
    //     where: { brand: brand }
    // });
    // if (existsCar) return res.status(404).send(" Existing car")

    // let carCreate =  Car.create({ brand, model, year, price, img });
            
    // let brandDB =  Brand.findAll({
    //     where: { name: brand }
    // });
            
    // carCreate.addBrand(brandDB);
}


module.exports = {
    getUsersDb,
    getUserDb, 
    createUserDb
};