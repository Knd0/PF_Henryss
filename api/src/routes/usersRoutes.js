const { Router } = require("express");

const { createUser, getAllUsers, deleteUser, changeUser } = require("../handlers/usersHandler");

const userRouter = Router();

userRouter.post('/', createUser);
userRouter.get('/', getAllUsers);
userRouter.put('/:userId', changeUser);
userRouter.delete('/:userId', deleteUser)


module.exports = userRouter;