const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //grab token from header
      token = req.headers.authorization.split(" ")[1];
      // validate token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get user from validated token
      req.user = await User.findById(decoded.id).select("-passowrd");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Valid User");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("NOT ALLOWED, NO TOKEN");
  }
});

module.exports = { protect };
