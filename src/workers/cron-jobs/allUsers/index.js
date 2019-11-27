const { db } = require("../../../models");
const { sendTop5FollowerPosts } = require("../../../utils/bull");

const findAllUsers = async (job, done) => {
  const users = await db.User.findAll({ attributes: ["id", "email"] });
  users.forEach(item => {
    sendTop5FollowerPosts.add({
      id: item.id,
      email: item.email
    });
  });

  done();
};

module.exports = findAllUsers;
