const express = require("express");
const router = express.Router();
const {
  addUser,
  loginUser,
  createProfile,
  getProfile,
} = require("../controllers/userController");

const {protect} = require('../middleware/authMiddleware')

router.post("/", addUser);
router.post("/new", createProfile);
router.post("/login", loginUser);

module.exports = router;
