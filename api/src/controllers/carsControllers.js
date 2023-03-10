const data = require('../../cards.json');
const { Car, Brand, User } = require('../db')
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
const createCar = async ({ brand, model, year, price, img, ...restOfcar }, userId) => {
    if (!brand || !model || !year || !price ) return ('Missing info');
    const existsCar = await Car.findOne({
        where: { model }
    });
    if (existsCar) throw new Error('Existing car');
    const carCreate =  await Car.create({ brand, model, year, price, img, ...restOfcar});
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if (searchUser) {
        // if (!searchUser.publications) {
        //     searchUser.publications = [];
        // }
        searchUser.publications.push(carCreate.carId);
        await User.update({ publications: searchUser.publications }, {
            where: { userId: userId }
        });
    }
    const brandDB =  await Brand.findOne({
        where: { brand }
    });
    await carCreate.addBrand(brandDB);
    return carCreate;
}



const deleteCarById = async(userId, id) => {
        const car = await Car.findByPk(id);
        let searchUser = await User.findOne({
            where: { userId: userId }
        });
        if(searchUser){
            if(searchUser.publications.indexOf(id) === -1) return ('you can not delete this car')
            else {
                searchUser.publications = searchUser.publications.filter((carId) => carId !== id)
            }
        }
        if (!car) return ('Car not found');
        if(car.img.public_id) {
            const deleteImg = await deleteImage(car.img.public_id)
            }

            await car.destroy();
            return 'Car successful delete';
        }


const editCar = async (userId, id, carUpdates) => {
        if (!id) return ('Id not provided');
        const car = await Car.findByPk(id);
        if (!car) return ('Car not found');
        let searchUser = await User.findOne({
            where: { userId: userId }
        });
        if(searchUser){
            if(searchUser.publications.indexOf(id) === -1) return ('you can not edit this car')
            else {
                await car.update({...carUpdates});
        return 'The car was updated';
            }
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
