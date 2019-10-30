const { db } = require("../../models");

const updateComment = async (req, res) => {
  try {
    const post = await db.Comment.findByPk(req.params.id);
    if (req.body.text) {
      post.text = req.body.text;
    }
    await post.save();
    res.status(200).json({
      message: "Post Updated Successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = updateComment;
