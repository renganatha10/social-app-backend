const { db } = require("../../models");

const getComments = async (req, res) => {
  try {
    const comments = await db.Comment.findAll({
      where: {
        postId: req.params.id
      },
      include: [
        {
          model: db.Post,
          required: true,
          attributes: ["id"]
        },
        {
          model: db.User,
          required: true,
          attributes: ["id", "firstName", "lastName"]
        }
      ],
      attributes: ["id", "text"]
    });
    res.status(200).json(comments);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      err
    });
  }
};

module.exports = getComments;
