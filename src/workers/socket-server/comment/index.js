const socketStore = require("../socket-store");

const sendRealTimeComment = async (job, done) => {
  const { comment, userId } = job.data;
  socketStore.getSocket(userId).emit("post:comment", { comment });
  done();
};

module.exports = sendRealTimeComment;
