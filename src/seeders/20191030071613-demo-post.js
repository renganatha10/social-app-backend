const { posts } = require("../utils/fake-data");

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("Posts", posts, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Posts", null, {});
  }
};
