const express = require('express');
const router = express.Router();


// get homepage
// route : GET /nicefit
// private
const getHome = (req, res) => {
    res.status(200).json({message: 'home'});
  };

// add outfit
// route : POST /nicefit
// private
const addFit = (req, res) => {
  res.status(200).json({message: 'add outfit'});
};

// update outfit
// route : PUT /nicefit/:id
// private
const updateFit = (req, res) => {
  res.status(200).json({message: `update outfit: ${req.params.id}`});
};

// delete outfit
  // route : DELETE /nicefit/:id
  // private
  const deleteFit = (req, res) => {
    res.status(200).json({message: `delete outfit: ${req.params.id}`});
};



module.exports = {
  getHome,
  addFit,
  updateFit,
  deleteFit
  
}