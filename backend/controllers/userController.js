const asyncHandler = require("express-async-handler");

//authenticate user
//route: POST /nicefit/user/login
//public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});

// add profile
// route : POST /nicefit/user
// public
const addProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "add user" });
});

// find profile
// route : GET /nicefit/user/me
// public
const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "my profile" });
});

module.exports = {
  addProfile,
  loginUser,
  getProfile
};
