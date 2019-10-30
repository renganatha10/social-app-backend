const { db } = require("../../models");

const getMyFollowers = async (req, res) => {
  try {
    const followers = await db.UserFollowing.findAll({
      where: { followerId: req.userId },
      include: [
        {
          model: db.User,
          as: "follower",
          required: true,
          attributes: ["firstName", "lastName"]
        }
      ],
      attributes: ["id"]
    });

    return res.status(200).json(followers);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = getMyFollowers;
