require("dotenv").config({ path: ".env" });
const cron = require("node-cron");

const createWorker = require("../../utils/bull/create-worker");
const {
  SEND_TOP_5_FOLLOWER_POST,
  FIND_ALL_USERS
} = require("../../utils/bull/bull-constants");
const { findAllUsersForCron } = require("../../utils/bull");
const allUsers = require("./allUsers");
const top5UserFeeds = require("./weeklyposts");

const server = createWorker({
  [SEND_TOP_5_FOLLOWER_POST]: top5UserFeeds,
  [FIND_ALL_USERS]: allUsers
});

server.listen(process.env.CRON_PORT || 3020);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + 3020;
  //eslint-disable-next-line
  console.log("CRON JOBS Listening on " + bind);

  cron.schedule("0 18 * * 5", () => {
    //eslint-disable-next-line
    console.log("Running on Every Friday 6 PM ");
    findAllUsersForCron.add();
  });
});
