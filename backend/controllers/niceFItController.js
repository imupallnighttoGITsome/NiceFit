const asyncHandler = require("express-async-handler");

const Outfit = require("../models/outfitModel");
const User = require("../models/userModel");

// ////////////////---------MEMBER STUFF
// /////

// get homepage
// route : GET /nicefit
// private
const getHome = asyncHandler(async (req, res) => {
  const outfits = await Outfit.find();
  res.status(200).json(outfits);
});

// add outfit
// route : POST /nicefit
// private
const addFit = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please enter text");
  }
  const outfit = await Outfit.create({
    hat: req.body.hat,
    glasses: req.body.glasses,
    top: req.body.top,
    bottoms: req.body.bottoms,
    socks: req.body.socks,
    shoes: req.body.shoes,
    user: req.user.id,
  });
  console.log(outfit);
  res.status(200).json(outfit);
});

// update outfit
// route : PUT /nicefit/:id
// private
const updateFit = asyncHandler(async (req, res) => {
  const outfit = await Outfit.findById(req.params.id);
  if (!outfit) {
    res.status(400);
    throw new Error("outfit not found");
  }

  const user = await User.findById(req.user.addFit);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }
  //make sure the right person is logged in
  if (outfit.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }
  const updatedFit = await Outfit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedFit);
});

// delete outfit
// route : DELETE /nicefit/:id
// private
const deleteFit = asyncHandler(async (req, res) => {
  const outfit = await Outfit.findById(req.params.id);
  if (!outfit) {
    res.status(400);
    throw new Error("outfit not found");
  }
  // const user = await User.findById(req.user.addFit);

  // //check for user
  // if(!user) {
  //   res.status(401)
  //   throw new Error('User Not Found')
  // }
  // //make sure the right person is logged in
  // if(outfit.user.toString() !== user.id) {
  //   res.status(401)
  //   throw new Error ('User Not Authorized')

  // }

  await outfit.remove();
  res.status(200).json({ id: req.params.id });
});

// update profile
// route : PUT /nicefit/:username
// private
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update profile: ${req.params.username}` });
});

module.exports = {
  getHome,
  updateProfile,
  addFit,
  updateFit,
  deleteFit,
};
