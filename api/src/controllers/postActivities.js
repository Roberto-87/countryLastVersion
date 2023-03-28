const { Activity } = require("../db");

const postActivity = async (nombre, dificultad, duracion, temporada) => {
  return await Activity.findOrCreate({
    where: { nombre: nombre },
    defaults: {
      nombre,
      dificultad,
      duracion,
      temporada,
    },
  });
};

module.exports = postActivity;
