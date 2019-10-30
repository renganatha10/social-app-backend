const { db } = require("../../models");

const getComments = async (req, res) => {
  try {
    await db.Comment.findAll({
      where: {
        userId: req.userId,
        postId: req.params.id
      },
      include: [
        { model: db.Post, required: true },
        { model: db.User, required: true }
      ],
      attributes: [
        "User.id",
        "User.firstName",
        "User.lastName",
        "User.nickName",
        "Post.id"
      ]
    });
    res.status(200).json({
      message: "Commented Successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = getComments;
