const { Activity, Country } = require("../db");

const getAllActivities = async () => {
  return await Activity.findAll({
    include: [
      {
        model: Country,
      },
    ],
  });
};

module.exports = getAllActivities;
