const BullQueue = require("bull");
const debug = require("debug")("app:bull");

const createQueue = name => {
  const newQueue = new BullQueue(name, process.env.REDIS_URL);
  newQueue.on("error", err => {
    debug("On Error", err);
  });
  newQueue.on("failed", failed => {
    debug("On Error", failed);
  });
  newQueue.on("stalled", stalled => {
    debug("On Error", stalled);
  });
  newQueue.on("progress", progress => {
    debug("On Error", progress);
  });
  return newQueue;
};

module.exports = createQueue;
