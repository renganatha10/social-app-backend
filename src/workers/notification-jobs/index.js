require("dotenv").config({ path: ".env" });

const createWorker = require("../../utils/bull/create-worker");
const {
  SEND_EMAIL_WHEN_SOMEBODY_FOLLOWS_ME
} = require("../../utils/bull/bull-constants");

const sendEmailWhenSomebodyFollowMe = require("./follow");

const server = createWorker({
  [SEND_EMAIL_WHEN_SOMEBODY_FOLLOWS_ME]: sendEmailWhenSomebodyFollowMe
});

server.listen(process.env.NOTIFICAITON_PORT || 3030);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + 3030;
  //eslint-disable-next-line
  console.log("Notification JOBS Listening on " + bind);
});
