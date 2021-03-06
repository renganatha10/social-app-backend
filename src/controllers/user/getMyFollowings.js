const { db } = require("../../models");

const getMyFollowings = async (req, res) => {
  try {
    const followings = await db.UserFollowing.findAll({
      where: { userId: req.userId },
      include: [
        {
          attributes: ["id", "firstName", "lastName"],
          model: db.User,
          as: "user",
          required: true
        }
      ],
      attributes: ["id"]
    });
    return res.status(200).json(followings);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = getMyFollowings;
