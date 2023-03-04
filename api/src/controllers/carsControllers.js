const data = require('../../cards.json');
const { Car, Brand } = require('../db')

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
    })
}

const getApiCars = () => {
    return data.cars;
}

const getAllCars = async () => {
    const apiData =getApiCars()
    const DbData = await getDbCars()
    const response = [...apiData, ...DbData]
    return response
}


const getCarByBrand = async (brand) => {
    const data = await getAllCars();
    const filteredCars = data.filter((car) => car.brand.toLowerCase().includes(brand.toLowerCase()));

    return filteredCars
}

const getCarByModel = async (model) => {
    const data = await getAllCars();
    const filteredCars = data.filter((car) => car.model.toLowerCase().includes(model.toLowerCase()));
    return filteredCars
}

const getCarDetail = async (id) => {
    const data = await getAllCars();
    const filteredCars = data.filter((car) => car.id == id );
    return filteredCars
}

const createCar = ( brand, model, year, price, img ) => {
    if(!brand || !model || !year || !price || !img) return ("Misssing info")
    let searchCar = Car.findOne({
        where: { brand: brand }
    });
    if (existsCar) return res.status(404).send(" Existing car")

    let carCreate =  Car.create({ brand, model, year, price, img });
            
    let brandDB =  Brand.findAll({
        where: { name: brand }
    });
            
    carCreate.addBrand(brandDB);
    res.status(201);
}


const deleteCarById = (id) => {
    const cars = Car.findByPk(id);
    if (!cars) {
        throw new Error("Not found ");
    } else {
        cars.detroy()
        return ("Car successful delete");
    }
}


const editCar = (brand, price, model, img, year) => {
	if (!id) return ('Id no provisto');
	const car =  Car.findByPk(id);
	if (!car) return('Car not found');
    const updateCar =  car.update({
		brand: brand || car.brand,
        price: price || car.price,
        model: model || car.model,
        year:year || car.year,
		img: img || car.img,
    });
	if (!updateCar) return ("car not updated");
    return ("the car was updated");
}


module.exports = {
        getApiCars,
        getCarByBrand,
        getCarByModel,
        getCarDetail,
        deleteCarById,
        createCar,
        editCar
    };


    // const deleteCarById = (id) => {
    //     try {
    //         const cars = Car.findByPk(id);
    //         if (!cars) {
    //             throw new Error("Not found ");
    //         } else {
    //             cars.detroy()
    //             return { msg: "Car successful delete" };
    //         }
    //     } catch(error) {
    //         throw new Error(error.message);
    //     }
    // }