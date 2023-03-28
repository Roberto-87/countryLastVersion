const { Country, Activity } = require("../db");

const getOneCountry = async (id) => {
  const countries = await Country.findByPk(id, {
    include: {
      model: Activity,
    },
  });
  return countries;
};

module.exports = getOneCountry;
