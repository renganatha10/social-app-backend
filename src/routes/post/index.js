const express = require("express");
const requestValidator = require("../../middlewares/request-validator");
const {
  createComment,
  createPost,
  deleteComment,
  deletePost,
  editComment,
  editPost,
  likePost,
  unLikePost,
  getComments,
  userFeeds
} = require("../../controllers/post");
const {
  createPostValidation,
  createCommentValidation,
  likeUnlikeValidation,
  editPostValidation,
  editCommentValidation
} = require("./validation");

const router = express.Router();

router.get("/userFeeds", userFeeds);
router.get("/:id/comments", getComments);

router.post(
  "/",
  (req, res, next) =>
    requestValidator(req, res, next, createPostValidation, req.body),
  createPost
);
router.post(
  "/:id/comment",
  (req, res, next) =>
    requestValidator(req, res, next, createCommentValidation, req.body),
  createComment
);
router.post(
  "/:id/like",
  (req, res, next) =>
    requestValidator(req, res, next, likeUnlikeValidation, req.params.id),
  likePost
);
router.post(
  "/:id/unlike",
  (req, res, next) =>
    requestValidator(req, res, next, likeUnlikeValidation, req.params.id),
  unLikePost
);

router.put(
  "/:id",
  (req, res, next) =>
    requestValidator(req, res, next, editPostValidation, req.body),
  editPost
);
router.put(
  "/comment/:id",
  (req, res, next) =>
    requestValidator(req, res, next, editCommentValidation, req.body),
  editComment
);

router.delete(
  "/:id",
  (req, res, next) =>
    requestValidator(req, res, next, likeUnlikeValidation, req.params.id),
  deletePost
);
router.delete(
  "/comment/:id",
  (req, res, next) =>
    requestValidator(req, res, next, likeUnlikeValidation, req.params.id),
  deleteComment
);

module.exports = router;
