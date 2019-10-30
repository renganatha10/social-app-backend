const createUser = require("./createUser");
const getUserById = require("./getUserById");
const updateUser = require("./updateUser");
const getMyFollowings = require("./getMyFollowings");
const getMyFollowers = require("./getMyFollowers");
const follow = require("./follow");
const unfollow = require("./unfollow");
const search = require("./search");

module.exports = {
  createUser,
  getUserById,
  updateUser,
  getMyFollowings,
  getMyFollowers,
  follow,
  unfollow,
  search
};
