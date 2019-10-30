const { db } = require("../../models");

const updatePost = async (req, res) => {
  try {
    const comment = await db.Comment.findByPk(req.params.id);
    if (req.body.text) {
      comment.text = req.body.text;
    }
    await comment.save();
    res.status(200).json({
      message: "Comment Updated Successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = updatePost;
