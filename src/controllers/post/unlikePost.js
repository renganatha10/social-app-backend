const { db } = require("../../models");
const { sendRealTimeUnlikes } = require("../../utils/bull");

const unlikePost = async (req, res) => {
  try {
    await db.PostLike.destroy({
      where: {
        postId: req.params.id,
        userId: req.userId
      }
    });
    sendRealTimeUnlikes.add({
      postId: req.params.id,
      userId: req.userId
    });
    res.status(200).json({
      message: "Unliked Successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = unlikePost;
