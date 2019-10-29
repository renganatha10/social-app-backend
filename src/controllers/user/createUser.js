const { db } = require("../../models");

const createUser = async (req, res) => {
  try {
    await db.User.create(req.body);
    res.status(200).json({
      message: "User Created Sucessfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = createUser;
