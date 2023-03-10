const { Router } = require("express");

const { getAllPublications } = require("../handlers/publicationsHandler");

const publicationsRouter = Router();

publicationsRouter.get("/:userId", getAllPublications);

module.exports = publicationsRouter;