const express = require('express');
const { createUser, getAllUsers, getUserByEmail } = require('../controllers/User');

const userrouter = express.Router();

router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:email', getUserByEmail)


module.exports = userrouter;