const { User } = require("../../../../models");

module.exports = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findByPk(userId);

  if (!user)
    return res.status(404).json({
      message: "user not found",
    });

  await user.destroy();

  return res.json({ message: "delete berhasil" });
};
