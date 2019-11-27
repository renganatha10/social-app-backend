const http = require("http");
const io = require("socket.io")(http);

const createWorker = require("../../utils/bull/create-worker");
const {
  SEND_REALTIME_COMMENT,
  SEND_REALTIME_UNLIKE,
  SEND_REALTIME_LIKE,
  SEND_REALTIME_USER_FEED
} = require("../../utils/bull/bull-constants");

const socketDictonary = require("./socket-store");
const authentication = require("./authentication");
const sendRealTimeComment = require("./comment");
const sendRealTimeUserFeed = require("./user-feed");
const sendRealTimeLike = require("./like");
const sendRealTimeUnlike = require("./unlike");

const server = createWorker({
  [SEND_REALTIME_COMMENT]: sendRealTimeComment,
  [SEND_REALTIME_UNLIKE]: sendRealTimeUnlike,
  [SEND_REALTIME_LIKE]: sendRealTimeLike,
  [SEND_REALTIME_USER_FEED]: sendRealTimeUserFeed
});

server.listen(process.env.PORT || 3040);

io.on("connection", socket => {
  const { token } = socket.handshake.query;
  const result = authentication(token);
  if (result) {
    if (result === "No Token Provided") {
      socket.emit("auth", {
        message: "Token Expired or Something went wrong"
      });
    } else {
      socket.emit("auth", {
        message: "Auth Success"
      });
      socketDictonary.setSocket(result, socket);
    }
  } else {
    socket.emit("auth", {
      message: "Token Not Provoided"
    });
  }

  socket.on("disconnect", () => {
    this.socketDictonary.removeSocket(socket.id);
  });
});

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + 3040;
  //eslint-disable-next-line
  console.log("Socket Server Listening on " + bind);
});
