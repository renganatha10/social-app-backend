const { db } = require("../../models");

const unFollow = async (req, res) => {
  try {
    const { followerId } = req.body;
    await db.UserFollowing.destroy({
      where: {
        userId: req.userId,
        followerId
      }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = unFollow;
