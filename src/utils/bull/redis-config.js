const url = require("url");

const getRedisConfig = redisUrl => {
  const redisConfig = url.parse(redisUrl);
  return {
    host: redisConfig.hostname || "localhost",
    port: Number(redisConfig.port || 6379),
    database: (redisConfig.pathname || "/0").substr(1) || "0",
    password: redisConfig.auth ? redisConfig.auth.split(":")[1] : undefined
  };
};

module.exports = getRedisConfig;
