const { db } = require("../../../models");
const socketStore = require("../socket-store");

const sendRealTimeUserFeed = async (job, done) => {
  const { post, userId } = job.data;

  const followers = await db.UserFollowing.findAll({
    where: { followerId: userId },
    include: [
      {
        model: db.User,
        as: "follower",
        required: true,
        attributes: ["id"]
      }
    ]
  });

  followers.forEach(item => {
    socketStore.getSocket(item.follower.id).emit("post:userfeed", { post });
  });

  done();
};

module.exports = sendRealTimeUserFeed;
