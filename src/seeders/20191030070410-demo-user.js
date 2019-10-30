const { users } = require("../utils/fake-data");

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("Users", users, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
