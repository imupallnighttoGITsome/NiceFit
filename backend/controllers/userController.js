const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// add profile
// route : POST /nicefit/user
// public
const addUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("Please Add All Fields");
  }
  //check if user already exists
  const alreadyMember = await User.findOne({ email });

  if (alreadyMember) {
    res.status(400);
    throw new Error("Already a Member");
  }
  //hash password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create new User

  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      userName: user.userName,
      email: user.email,
      token: getToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid User");
  }
});

const createProfile = asyncHandler(async (req, res) => {
console.log('new user')
})

//authenticate user
//route: POST /nicefit/user/login
//public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user email exists
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      userName: user.userName,
      email: user.email,
      token: getToken(user._id)

    });
  } else {
    res.status(400);
    throw new Error("Invalid User");
  }
});

// get user info
// route GET /nicefit/user/me

const getMe = asyncHandler(async (req, res) => {
  const {_id, userName, email} = await User.findById(req.user.id)

  res.status(200).json({
    id: _id,
    userName,
    email
  })
})

//generate token
const getToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  loginUser,
  addUser,
  createProfile,
  getMe
};
