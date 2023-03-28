const express = require("express");
const activitiesRouter = express.Router();
const postActivity = require("../controllers/postActivities");
const getAllActivities = require("../controllers/getAllActivities");
const updateActivity = require("../controllers/updateActivity");
const postNewGroup = require("../controllers/postNewGroup");
const { Activity } = require("../db");

activitiesRouter.post("/", async (req, res) => {
  try {
    const { nombre, dificultad, duracion, temporada, CountryId } = req.body;

    if (!nombre || !dificultad || !duracion || !temporada) {
      throw new Error("Falta información obligatoria");
    }
    const newActivity = await postActivity(
      nombre,
      dificultad,
      duracion,
      temporada
    );
    const idNewActivity = newActivity.map((act) => act.id)[0]; //me devuelve el id
    const activityFinder = await Activity.findByPk(idNewActivity); //me devuelve un obj con toda la data de la activity
    await activityFinder.setCountries(CountryId); //seteo para esa actividad los países pasandole el id

    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activitiesRouter.post("/group", async (req, res) => {
  try {
    const group = req.body;
    if (!group) throw new Error("No se recibieron datos");
    const newGroup = postNewGroup(group);
    if (newGroup) res.status(200).send("creación exitosa");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

activitiesRouter.get("/", async (req, res) => {
  try {
    const allActivities = await getAllActivities();
    if (!allActivities.length)
      throw new Error("no se encontraron actividades para mostrar");
    return res.status(201).json(allActivities);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

activitiesRouter.put("/", async (req, res) => {
  try {
    const { id, temporada } = req.body;

    if (id & temporada) {
      const update = updateActivity(req.body);
      res.status(200).json(update);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = activitiesRouter;
