import { db } from "../../models";

const likePost = async (req, res) => {
  try {
    await db.PostLike.create({
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
