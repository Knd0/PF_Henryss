const { User, Reviews } = require('../db')

const getAllReviews = async () => {
    let reviews = await Reviews.findAll();
    return reviews
}

const getDbReviews = async (reviewId) => {
    if(!reviewId) return ('You need a reviewId to search')
    const searchReview = await Reviews.findByPk(reviewId);
    if(!searchReview) return ('You dont have reviews')
    return searchReview
}

const addReview = async (userId, name, review, rating) => {
    if(!userId) return ('You need to login for see your review')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    let searchReview = await Reviews.findOne({
        where: { userId: userId }
    });
    if(searchReview) return ('You can not create another review')
    const reviewCreate = await Reviews.create({userId, name, review, rating})

    return reviewCreate 
}

const updateReview = async (userId, review) => {
    if(!userId) return ('You need to login for see your review')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    let searchReview = await Reviews.findOne({
        where: { userId: userId }
    });
    if(!searchReview) return ('You do not have reviews')
    await Reviews.update({ review: review }, {
        where: { userId: userId }
    });
    return ('Review changed')

}

const deleteReview = async (userId) => {
    if(!userId) return ('You need to login for see your review')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    let searchReview = await Reviews.findOne({
        where: { userId: userId }
    });
    if(!searchReview) return ('You dont have review') 
    await searchReview.destroy()
    return ('Review deleted')
}


module.exports = {
    getDbReviews,
    addReview,
    deleteReview,
    updateReview,
    getAllReviews
}

