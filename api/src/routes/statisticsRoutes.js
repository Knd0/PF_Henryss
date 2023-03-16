const { Router } = require("express");

const { getStatisticsCars, getStatisticsUsers } = require("../handlers/statisticsHandler");

const statisticsRouter = Router();

statisticsRouter.get("/cars", getStatisticsCars);
statisticsRouter.get("/users", getStatisticsUsers);

module.exports = statisticsRouter;