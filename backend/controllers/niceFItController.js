const asyncHandler = require('express-async-handler');

const Outfit = require('../models/outfitModel')

////////////////---------NEW USER STUFF
/////

// add profile
// route : POST /nicefit/newuser
// private
const addProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "add user" });
});

// update profile
// route : PUT /nicefit/:username
// private
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update profile: ${req.params.username}` });
});

// delete profile
// route : DELETE /nicefit/:username/:id
// private
const deleteProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete profile: ${req.params.username}` });
});

// ////////////////---------MEMBER STUFF
// /////

// get homepage
// route : GET /nicefit
// private
const getHome = asyncHandler(async(req, res) => {
  const outfits = await Outfit.find()
  res.status(200).json(outfits);
});

// get profile
// route : GET /nicefit/user/:id
// private
const getProfile = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `my profile: ${req.params.id}` });
});

// add outfit
// route : POST /nicefit
// private
const addFit = asyncHandler(async(req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please enter text')
  }
  res.status(200).json({ message: "add outfit" });
});

// update outfit
// route : PUT /nicefit/:id
// private
const updateFit = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `update outfit: ${req.params.id}` });
});

// delete outfit
// route : DELETE /nicefit/:id
// private
const deleteFit = asyncHandler(async(req, res) => {
  res.status(200).json({ message: `delete outfit: ${req.params.id}` });
});

module.exports = {
  addProfile,
  getHome,
  getProfile,
  deleteProfile,
  updateProfile,
  addFit,
  updateFit,
  deleteFit,
};
