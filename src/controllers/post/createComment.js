const { db } = require("../../models");

const createComment = async (req, res) => {
  try {
    const newComment = await db.Comment.create({
      ...req.body,
      postId: req.params.id,
      userId: req.userId
    });
    res.status(200).json({
      message: "Commented Successfully",
      payload: {
        id: newComment.id
      }
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = createComment;
