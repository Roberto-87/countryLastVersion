// Importar todos los routers;
const countriesRouter = require("../routes/countriesRouter.js");
const activitiesRouter = require("../routes/activitiesRouter.js");
const express = require("express");
const server = express();
const cors = require("cors");

// Configurar los routers
server.use(cors());
server.use(express.json());
server.use("/countries", countriesRouter);
server.use("/activities", activitiesRouter);

module.exports = server;
