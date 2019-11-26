const { db, sequelize } = require("../../models");

const getUserById = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.userId, {
      attributes: [
        "id",
        "firstName",
        "lastName",
        "profilePhoto",
        "coverPhoto",
        "bio",
        "dateOfBirth",
        "gender",
        [
          sequelize.literal(
            '(SELECT COUNT("Posts".id) FROM "Posts" WHERE "Posts"."userId" = "User"."id")'
          ),
          "postCount"
        ],
        [
          sequelize.literal(
            '(SELECT COUNT("UserFollowings".id) FROM "UserFollowings" WHERE "UserFollowings"."userId" = "User"."id")'
          ),
          "followerCount"
        ],
        [
          sequelize.literal(
            '(SELECT COUNT("UserFollowings".id) FROM "UserFollowings" WHERE "UserFollowings"."followerId" = "User"."id")'
          ),
          "followingCount"
        ]
      ]
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = getUserById;
