const { Activity } = require("../db");

const postNewGroup = async (group) => {
  const newGroup = await Activity.bulkCreate(group);
  return newGroup;
};

module.exports = postNewGroup;
