const createComment = require("./createComment");
const createPost = require("./createPost");
const deleteComment = require("./deleteComment");
const deletePost = require("./deletePost");
const editComment = require("./editComment");
const editPost = require("./editPost");
const likePost = require("./likePost");
const unLikePost = require("./unlikePost");
const getComments = require("./getComments");
const userFeeds = require("./userFeeds");
const userPosts = require("./userPosts");
const getPostLikers = require("./getPostLikers");

module.exports = {
  createComment,
  createPost,
  deleteComment,
  deletePost,
  editComment,
  editPost,
  likePost,
  unLikePost,
  getComments,
  userFeeds,
  userPosts,
  getPostLikers
};
