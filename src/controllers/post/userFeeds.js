const Sequelize = require("sequelize");

const { db } = require("../../models");

const OP = Sequelize.Op;

const userFeed = async (req, res) => {
  try {
    const myFollowings = await db.userFollowing.findAll({
      where: {
        userId: req.userId
      },
      attributes: ["followerId"]
    });

    const userFeeds = await db.Post.findAll({
      where: {
        userId: {
          [OP.in]: myFollowings
        }
      },
      include: [{ model: db.User, required: true }],
      attributes: [
        "User.Id",
        "User.firstName",
        "User.lastName",
        "User.NickName"
      ]
    });

    res.status(200).json(userFeeds);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = userFeed;
