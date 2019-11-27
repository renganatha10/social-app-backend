const Sequelize = require("sequelize");

const { db, sequelize } = require("../../../models");
const emailTranporter = require("../../../utils/email");

const OP = Sequelize.Op;

const sendEmailOnTop5WeeklyPost = async (job, done) => {
  const {
    user: { id, email }
  } = job.data;

  const myFollowings = await db.UserFollowing.findAll({
    where: {
      userId: id
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
      ]
    ],
    order: [["likesCount", "DESC"]],
    limit: 5
  });

  await emailTranporter.sendMail({
    from: "renganatha10@gmail.com",
    to: email,
    subject: "News Feed 🗞",
    text: `Your Top 5 Feeds`,
    html: JSON.stringify(userFeeds)
  });

  done();
};

module.exports = sendEmailOnTop5WeeklyPost;
