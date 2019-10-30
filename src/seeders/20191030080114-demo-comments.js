const { comments } = require("../utils/fake-data");

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("Comments", comments, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Comments", null, {});
  }
};
