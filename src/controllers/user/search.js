const Sequelize = require("sequelize");

const { db } = require("../../models");

const OP = Sequelize.Op;

const search = async (req, res) => {
  const { searchText } = req.query;
  try {
    await db.User.findAll({
      where: {
        [OP.or]: {
          nickName: {
            [OP.like]: `${searchText}%`
          },
          firstName: {
            [OP.like]: `${searchText}%`
          },
          lastName: {
            [OP.like]: `${searchText}%`
          }
        }
      },
      raw: true
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = search;
