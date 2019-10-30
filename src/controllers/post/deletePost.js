const { db } = require("../../models");

const deletePost = async (req, res) => {
  try {
    await db.Post.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({
      message: "Post Deleted Successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = deletePost;
