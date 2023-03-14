const { Router } = require("express");

const { createUser, getAllUsers } = require("../handlers/usersHandler");

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/', getAllUsers);


module.exports = userRouter;