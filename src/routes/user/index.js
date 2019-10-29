const express = require("express");
const requestValidator = require("../../middlewares/request-validator");
const {
  createUser,
  getUserById,
  updateUser
} = require("../../controllers/user");
const {
  createUser: createUserValidation,
  updateUser: updateUserValidation
} = require("./validation");

const router = express.Router();

router.get("/:id", getUserById);
router.post(
  "/",
  (req, res, next) =>
    requestValidator(req, res, next, createUserValidation, req.body),
  createUser
);
router.put(
  "/:id",
  (req, res, next) =>
    requestValidator(req, res, next, updateUserValidation, req.body),
  updateUser
);

module.exports = router;
