const { Router } = require("express");

const { createUser, getAllUsers, getUserByEmail } = require("../handlers/usersHandler");

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:email', getUserByEmail);

module.exports = userRouter;