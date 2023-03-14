const { User } = require('../db')

const getDbReviews = async (userId) => {
    if(!userId) return ('You need to login for see your favorites')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    if(!searchUser.review) return ('You dont have reviews')
    const data = searchUser.review
    return data
}

const addReview = async (userId, review) => {
    if(!userId) return ('You need to login for see your review')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    searchUser.review = review
    await User.update({ review: searchUser.review }, {
        where: { userId: userId }
    });
    return ('Review added')
}

const updateReview = async (userId, review) => {
    if(!userId) return ('You need to login for see your review')
    let searchUser = await User.findOne({
        where: { userId: userId }
    });
    if(!searchUser) return ('This user does not exist')
    if(!searchUser.review) return ('You dont have review')
    searchUser.review = review
    await User.update({ review: searchUser.review }, {
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
    if(!searchUser.review) return ('You dont have review')
    searchUser.review = null;
    await User.update({ review: searchUser.review }, {
        where: { userId: userId }
    });
    return ('Review deleted')
}


module.exports = {
    getDbReviews,
    addReview,
    deleteReview,
    updateReview
}