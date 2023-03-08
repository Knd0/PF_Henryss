const data = require('../../cards.json');
const { Car, Brand } = require('../db')
const { deleteImage } = require('../utils/cloudinary')

const getDbCars = async () => {
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
}

const getApiCars = () => {
    return data.cars;
}

const getAllCars = async () => {
        const apiData = getApiCars();
        const DbData = await getDbCars();
        const response = [...DbData,...apiData ];
        return response;
}


const getCarByBrand = async (brand) => {
        const data = await getAllCars();
        const filteredCars = data.filter((car) => car.brand.toLowerCase().includes(brand.toLowerCase()));
        return filteredCars;
}

const getCarByModel = async (model) => {
        const data = await getAllCars();
        const filteredCars = data.filter((car) => car.model.toLowerCase().includes(model.toLowerCase()));
        return filteredCars
}

const getCarDetail = async (id) => {
    const data = await getAllCars();
    const filteredCars = data.filter((car) => car.id == id||car.carId==id );
    return filteredCars;
}

const createCar = async ({ brand, model, year, price, img, ...restOfcar }) => {
        if (!brand || !model || !year || !price ) return ('Misssing info');
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
}

const deleteCarById = async(id) => {
        const car = await Car.findByPk(id);
        if (!car) return ('Car not found');
        else {
            if(car.img.public_id){
            const deleteImg = await deleteImage(car.img.public_id)
            }
            await car.destroy();
            return 'Car successful delete';
        }
}


const editCar = async (id, carUpdates) => {
        if (!id) return ('Id not provided');
        const car = await Car.findByPk(id);
        if (!car) return ('Car not found');
        await car.update({...carUpdates});
        return 'The car was updated';
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
