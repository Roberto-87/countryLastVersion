const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getAllCountries = async (name) => {
  try {
    if (name) {
      const countryByName = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`, //hace una búsqueda de coincidencia de patrones que no distingue entre mayúsculas y minúsculas.
          },
        },
        include: {
          model: Activity,
        },
      });
      if (!countryByName) throw new Error("No se encontraron coincidencias");
      return countryByName;
    }
    const countries = await Country.findAll({
      include: {
        model: Activity,
      },
    });
    if (!countries) throw new Error("se produjo un error en la request");
    return countries;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getAllCountries;
