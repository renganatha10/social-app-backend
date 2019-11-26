const { db } = require("../../models");

const createPost = async (req, res) => {
  try {
    const newPost = await db.Post.create({
      ...req.body,
      userId: req.userId
    });
    res.status(200).json({
      message: "Post Created Successfully",
      payload: {
        id: newPost.id
      }
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = createPost;
