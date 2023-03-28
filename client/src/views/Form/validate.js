const validate = ({ nombre, duracion, dificultad, temporada, country }) => {
  let errors = {};
  const regexDuracion = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  if (nombre === "") {
    errors["nombre"] = " Indica el nombre de la actividad";
  }
  if (!isNaN(nombre) && nombre !== "") {
    errors["nombre"] = "El nombre indicado no es válido";
  }
  if (!duracion) {
    errors["duracion"] = "Indicá cuánto dura la actividad";
  } else if (!regexDuracion.test(duracion)) {
    errors["duracion"] =
      "Ingresá la duración en HH:MM, por ejemplo una hora y media es 01:30";
  }
  if (!dificultad) {
    errors["dificultad"] = "por favor ingresá un valor";
  } else if (Number(dificultad) > 5 || Number(dificultad) < 1) {
    errors["dificultad"] = "Ingresá un número del 1 al 5";
  }

  if (temporada === "Temporada") {
    errors["temporada"] = "Seleccioná una temporada";
  }

  return errors;
};

export default validate;
