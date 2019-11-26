const { db, sequelize } = require("../../models");

const userPosts = async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      where: {
        userId: req.userId
      },
      attributes: [
        "id",
        "text",
        "videoUrl",
        "photoUrl",
        [
          sequelize.literal(
            '(SELECT COUNT("PostLikes".id) FROM "PostLikes" WHERE "Post"."id" = "PostLikes"."postId")'
          ),
          "likesCount"
        ],
        [
          sequelize.literal(
            '(SELECT COUNT("Comments".id) FROM "Comments" WHERE "Post"."id" = "Comments"."postId")'
          ),
          "commentsCount"
        ]
      ]
    });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = userPosts;
