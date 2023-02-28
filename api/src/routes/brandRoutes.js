const { Router } = require("express");

const { getAllBrands } = require("../handlers/brandsHandler");

const brandRouter = Router();

brandRouter.get("/", getAllBrands);

module.exports = brandRouter;