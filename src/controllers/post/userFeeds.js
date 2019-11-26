const Sequelize = require("sequelize");

const { db } = require("../../models");

const OP = Sequelize.Op;

const userFeed = async (req, res) => {
  try {
    const myFollowings = await db.UserFollowing.findAll({
      where: {
        userId: req.userId
      },
      attributes: ["followerId"]
    });

    const userFeeds = await db.Post.findAll({
      where: {
        userId: {
          [OP.in]: myFollowings.map(item => item.followerId)
        }
      },
      include: [
        {
          model: db.User,
          required: true,
          attributes: ["id", "firstName", "lastName", "profilePhoto"]
        }
      ],
      attributes: ["id", "text", "videoUrl", "photoUrl"]
    });

    res.status(200).json(userFeeds);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = userFeed;
