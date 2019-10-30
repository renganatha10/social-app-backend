const { userFollowings } = require("../utils/fake-data");

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("UserFollowings", userFollowings, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("UserFollowings", null, {});
  }
};
