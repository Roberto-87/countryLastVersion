const express = require("express");
const countriesRouter = express.Router();
const getAllCountries = require("../controllers/getAllCountries");
const getOneCountry = require("../controllers/getOneCountry");

countriesRouter.get("/", async (req, res) => {
  try {
    const { name } = req.query;

    if (name) {
      const countryByName = await getAllCountries(name);
      res.status(200).json(countryByName);
    } else {
      const allCountries = await getAllCountries();
      res.status(200).json(allCountries);
    }
  } catch (error) {
    res.status(404).send("hubo un error en getAllCountries");
  }
});

countriesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneCountry = await getOneCountry(id.toUpperCase());
    if (!oneCountry) throw new Error("no se encontró el país buscado");
    res.status(200).json(oneCountry);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

module.exports = countriesRouter;
