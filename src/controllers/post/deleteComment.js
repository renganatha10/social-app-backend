const { db } = require("../../models");

const deleteComment = async (req, res) => {
  try {
    await db.Comment.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({
      message: "Comment Deleted Successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = deleteComment;
