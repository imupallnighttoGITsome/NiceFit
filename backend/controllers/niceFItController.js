const asyncHandler = require("express-async-handler");

const Outfit = require("../models/outfitModel");

// ////////////////---------MEMBER STUFF
// /////

// get homepage
// route : GET /nicefit
// private
const getHome = asyncHandler(async (req, res) => {
  const outfits = await Outfit.find();
  res.status(200).json(outfits);
});



// update profile
// route : PUT /nicefit/:username
// private
const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update profile: ${req.params.username}` });
});


// add outfit
// route : POST /nicefit
// private
const addFit = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter text");
  }
  const outfit = await Outfit.create({
    hat: req.body.text,
    glasses: req.body.text,
    top: req.body.text,
    bottoms: req.body.text,
    socks: req.body.text,
    shoes: req.body.text,
    
  });
  res.status(200).json(outfit);
});

// update outfit
// route : PUT /nicefit/:id
// private
const updateFit = asyncHandler(async (req, res) => {
  const outfit = await Outfit.findById(req.params.id)
  if(!outfit) {
    res.status(400)
    throw new Error('outfit not found')
  }
  const updatedFit = await Outfit.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.status(200).json(updatedFit);
});

// delete outfit
// route : DELETE /nicefit/:id
// private
const deleteFit = asyncHandler(async (req, res) => {
  const outfit = await Outfit.findById(req.params.id)
  if(!outfit) {
    res.status(400) 
    throw new Error('outfit not found')
  }

  await outfit.remove()
  res.status(200).json({id: req.params.id});
});

module.exports = {
  getHome,
  updateProfile,
  addFit,
  updateFit,
  deleteFit,
};
