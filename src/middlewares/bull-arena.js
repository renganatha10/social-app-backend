const express = require("express");
const arena = require("bull-arena");

const getRedisConfig = require("./../utils/bull/redis-config");
const BULLCONSTANTS = require("./../utils/bull/bull-constants");

const queues = Object.keys(BULLCONSTANTS).map(constant => {
  return {
    name: constant,
    hostId: "worker",
    redis: getRedisConfig(process.env.REDIS_URL)
  };
});

const router = express.Router();

router.use(
  "/",
  arena(
    {
      queues
    },
    {
      basePath: "/arena",
      disableListen: true
    }
  )
);

module.exports = router;
