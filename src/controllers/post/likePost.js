const { db } = require("../../models");
const { sendRealTimeLikes } = require("../../utils/bull");

const likePost = async (req, res) => {
  try {
    await db.PostLike.create({
      postId: req.params.id,
      userId: req.userId
    });
    sendRealTimeLikes.add({
      postId: req.params.id,
      userId: req.userId
    });
    res.status(200).json({
      message: "Liked Successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = likePost;
