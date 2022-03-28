const express = require("express");
const router = express.Router();
const {
  addProfile,
  loginUser,
  getProfile,
} = require("../controllers/userController");

router.post("/", addProfile);
router.post("/login", loginUser);
router.get("/me", getProfile);

module.exports = router;
