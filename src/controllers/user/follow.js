const { db } = require("../../models");
const { sendEmailWhenSomeOneFollowsMe } = require("../../utils/bull");

const follow = async (req, res) => {
  try {
    const { followerId } = req.body;
    await db.UserFollowing.create({ userId: req.userId, followerId });
    sendEmailWhenSomeOneFollowsMe({
      userId: req.userId,
      followerId
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = follow;
