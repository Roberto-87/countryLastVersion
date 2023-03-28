const { Activity } = require("../db");

const updateActivity = async ({ id, temporada }) => {
  await Activity.update({ temporada }),
    {
      where: {
        id,
      },
    };
  return Activity.findByPk(id);
};

module.exports = updateActivity;
