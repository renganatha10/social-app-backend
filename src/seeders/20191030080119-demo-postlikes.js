const { postLikes } = require("../utils/fake-data");

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("PostLikes", postLikes, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("PostLikes", null, {});
  }
};
