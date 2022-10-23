const { User } = require("../../../models");

// get all users data
module.exports = async (req, res) => {
  const users = await User.findAll();

  return res.json(users);
};
