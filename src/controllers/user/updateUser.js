const { db } = require("../../models");

const userAttibutes = [
  "gender",
  "email",
  "firstName",
  "lastName",
  "dateOfBirth",
  "nickName",
  "bio",
  "coverPhoto",
  "profilePhoto"
];

const updateUser = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.userId);
    userAttibutes.forEach(item => {
      if (req.body[item]) {
        user[item] = req.body[item];
      }
    });
    await user.save();
    res.status(200).json({
      message: "User Updated Successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = updateUser;
