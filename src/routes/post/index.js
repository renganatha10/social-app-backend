const express = require("express");

const router = express.Router();

router.get("/userFeeds", () => {});
router.get("/", () => {});
router.get("/:id/comments", () => {});

router.post("/", () => {});
router.post("/:id/comment", () => {});
router.post("/:id/like", () => {});
router.post("/:id/unlike", () => {});

router.put("/:id", () => {});
router.put("/:id/comment/:commentId", () => {});

router.delete("/:id", () => {});
router.delete("/:id/comment/:commentId", () => {});
