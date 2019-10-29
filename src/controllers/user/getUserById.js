const { db } = require("../../models");

const getUserById = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = getUserById;
