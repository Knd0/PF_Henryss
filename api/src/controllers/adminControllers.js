const { Car, User, Reviews } = require('../db')
const { getUsersDb } = require('./usersControllers')
const { deleteImage } = require('../utils/cloudinary')

const deleteCar = async (id) => {
    const car = await Car.findByPk(id);
    const data = await getUsersDb();
    const users = data.filter((user) => user.publications.indexOf(id) !== -1 )
    let searchUser = await User.findOne({
        where: { userId: users[0].userId }
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

    const deleteReview = async (reviewId) => {
        const review = await Reviews.findByPk(reviewId);
        await review.destroy()
        return ('Review deleted')
    }
    module.exports = {
        deleteCar,
        deleteReview
    }