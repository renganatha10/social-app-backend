const { db } = require("../../models");

const getPostLikers = async (req, res) => {
  try {
    const postLikers = await db.PostLike.findAll({
      where: {
        postId: req.params.id
      },
      include: [
        {
          attributes: ["id", "firstName", "lastName"],
          model: db.User,
          required: true
        }
      ],
      attributes: ["id"]
    });
    return res.status(200).json(postLikers);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = getPostLikers;
