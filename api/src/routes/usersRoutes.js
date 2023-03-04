const { Router } = require("express");

const { createUser, getAllUsers, getUserByEmail } = require("../handlers/usersHandler");

const userRouter = Router();

userRouter.post('/user', createUser);
userRouter.get('/user', getAllUsers);
userRouter.get('/user/:email', getUserByEmail);

module.exports = userRouter;