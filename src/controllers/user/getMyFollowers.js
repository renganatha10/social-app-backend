import { db } from "../../models";

const getMyFollowers = async (req, res) => {
  try {
    const followers = await db.UserFollowing.findAll({
      where: { followerId: req.userId },
      include: [{ model: db.User, required: true }],
      attributes: [
        "User.id",
        "User.firstName",
        "User.lastName",
        "User.nickName"
      ]
    });

    return res.status(200).json(followers);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = getMyFollowers;
