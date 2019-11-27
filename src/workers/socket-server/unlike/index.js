const socketStore = require("../socket-store");

const sendRealTimeUnlike = async (job, done) => {
  const { postId, userId } = job.data;
  socketStore.getSocket(userId).emit("post:unlike", { postId });
  done();
};

module.exports = sendRealTimeUnlike;
