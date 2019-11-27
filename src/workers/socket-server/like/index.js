const socketStore = require("../socket-store");

const sendRealTimeLike = async (job, done) => {
  const { postId, userId } = job.data;
  socketStore.getSocket(userId).emit("post:like", { postId });
  done();
};

module.exports = sendRealTimeLike;
