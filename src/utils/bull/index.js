const {
  SEND_REALTIME_USER_FEED,
  SEND_REALTIME_COMMENT,
  SEND_REALTIME_LIKE,
  SEND_REALTIME_UNLIKE,
  SEND_TOP_5_FOLLOWER_POST,
  SEND_EMAIL_WHEN_SOMEBODY_FOLLOWS_ME,
  FIND_ALL_USERS
} = require("./bull-constants");
const createQueue = require("./create-queue");

const QUEUE_NAMES = {
  sendRealTimeUserFeeds: SEND_REALTIME_USER_FEED,
  sendRealTimeComments: SEND_REALTIME_COMMENT,
  sendRealTimeLikes: SEND_REALTIME_LIKE,
  sendRealTimeUnlikes: SEND_REALTIME_UNLIKE,
  sendTop5FollowerPosts: SEND_TOP_5_FOLLOWER_POST,
  sendEmailWhenSomeOneFollowsMe: SEND_EMAIL_WHEN_SOMEBODY_FOLLOWS_ME,
  findAllUsersForCron: FIND_ALL_USERS
};

const queues = Object.keys(QUEUE_NAMES).reduce((queues, name) => {
  queues[name] = createQueue(QUEUE_NAMES[name]);
  return queues;
}, {});

module.exports = queues;
