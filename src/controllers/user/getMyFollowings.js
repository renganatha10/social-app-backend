const { db } = require("../../models");

const getMyFollowings = async (req, res) => {
  try {
    const followings = await db.UserFollowing.findAll({
      where: { userId: req.userId },
      include: [{ model: db.User, required: true }],
      attributes: [
        "User.id",
        "User.firstName",
        "User.lastName",
        "User.nickName"
      ]
    });
    return res.status(200).json(followings);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = getMyFollowings;
