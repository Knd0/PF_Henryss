const data = require('../../cards.json');
const { Car, Brand } = require('../db')

const getDbCars = async () => {
    try {
        return await Car.findAll({
            include: [
                {
                    model: Brand,
                    attributes: ['brand'],
                    through: {
                        attributes: []
                    }

                }
            ]
        });
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

const getApiCars = () => {
    return data.cars;
}

const getAllCars = async () => {
    try {
        const apiData = getApiCars();
        const DbData = await getDbCars();
        const response = [...DbData,...apiData ];
        return response;
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}


const getCarByBrand = async (brand) => {
    try {
        const data = await getAllCars();
        const filteredCars = data.filter((car) => car.brand.toLowerCase().includes(brand.toLowerCase()));
        return filteredCars;
    } catch (error) {
        console.log(error);
        throw new Error(error.message)
    }
}

const getCarByModel = async (model) => {
    try {
        const data = await getAllCars();
        const filteredCars = data.filter((car) => car.model.toLowerCase().includes(model.toLowerCase()));
        return filteredCars
    } catch (error){
        console.log(error);
        throw new Error(error.message)
    }
}

const getCarDetail = async (id) => {
    const data = await getAllCars();
    const filteredCars = data.filter((car) => car.id == id||car.carId==id );
    return filteredCars;
}

const createCar = async ({ brand, model, year, price, img, ...restOfcar }) => {
    try {
        if (!brand || !model || !year || !price || !img) throw new Error('Misssing info');
        const existsCar = await Car.findOne({
            where: { model }
        });
        if (existsCar) throw new Error('Existing car');

        const carCreate =  await Car.create({ brand, model, year, price, img, ...restOfcar});

        const brandDB =  await Brand.findOne({
            where: { brand }
        });

        await carCreate.addBrand(brandDB);
        return carCreate;
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}


const deleteCarById = async(id) => {
    try{
        const car = await Car.findByPk(id);
        if (!car) {
        throw new Error('Not found');
        } else {
            await car.destroy();
            return 'Car successful delete';
        }
    } catch(error) {
        console.log(error)
        throw new Error(error.message)
    }
}


const editCar = async (id, carUpdates) => {
    try {
        if (!id) throw new Error('Id not provided');
        const car = await Car.findByPk(id);
        if (!car) throw new Error('Car not found');
        await car.update({...carUpdates});
        return 'The car was updated';
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}


module.exports = {
    getApiCars,
    getCarByBrand,
    getCarByModel,
    getCarDetail,
    deleteCarById,
    createCar,
    editCar,
    getAllCars
};
