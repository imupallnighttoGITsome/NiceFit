const express = require("express");
const router = express.Router();
const {
  addProfile,
  loginUser,
  getProfile,
} = require("../controllers/userController");

const {protect} = require('../middleware/authMiddleware')

router.post("/", addProfile);
router.post("/login", loginUser);
router.get("/me", protect, getProfile);

module.exports = router;
