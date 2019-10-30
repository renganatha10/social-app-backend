const express = require("express");
const requestValidator = require("../../middlewares/request-validator");
const {
  createUser,
  getUserById,
  updateUser,
  follow,
  unfollow,
  getMyFollowers,
  getMyFollowings,
  search
} = require("../../controllers/user");
const {
  createUser: createUserValidation,
  updateUser: updateUserValidation,
  followUnfollowValidation,
  searchValidation
} = require("./validation");

const router = express.Router();

router.get("/", getUserById);
router.get("/followers", getMyFollowers);
router.get("/followings", getMyFollowings);
router.get(
  "/search",
  (req, res, next) =>
    requestValidator(req, res, next, searchValidation, req.query),
  search
);

router.post(
  "/follow",
  (req, res, next) =>
    requestValidator(req, res, next, followUnfollowValidation, req.body),
  follow
);
router.post(
  "/unfollow",
  (req, res, next) =>
    requestValidator(req, res, next, followUnfollowValidation, req.body),
  unfollow
);
router.post(
  "/",
  (req, res, next) =>
    requestValidator(req, res, next, createUserValidation, req.body),
  createUser
);

router.put(
  "/",
  (req, res, next) =>
    requestValidator(req, res, next, updateUserValidation, req.body),
  updateUser
);

module.exports = router;
