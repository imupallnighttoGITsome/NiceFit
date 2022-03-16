////////////////---------NEW USER STUFF
/////

// add profile
// route : POST /nicefit/newuser
// private
const addProfile = (req, res) => {
  res.status(200).json({ message: "add user" });
};

// update profile
// route : PUT /nicefit/:username
// private
const updateProfile = (req, res) => {
  res.status(200).json({ message: `update profile: ${req.params.username}` });
};

// delete profile
// route : DELETE /nicefit/:username/:id
// private
const deleteProfile = (req, res) => {
  res.status(200).json({ message: `delete profile: ${req.params.username}` });
};

// ////////////////---------MEMBER STUFF
// /////

// get homepage
// route : GET /nicefit
// private
const getHome = (req, res) => {
  res.status(200).json({ message: "home" });
};

// get profile
// route : GET /nicefit/user/:id
// private
const getProfile = (req, res) => {
  res.status(200).json({ message: `my profile: ${req.params.id}` });
};

// add outfit
// route : POST /nicefit
// private
const addFit = (req, res) => {
  if(!req.body.text) {
    res.status(400).json('message: plz add text field')
  }
  res.status(200).json({ message: "add outfit" });
};

// update outfit
// route : PUT /nicefit/:id
// private
const updateFit = (req, res) => {
  res.status(200).json({ message: `update outfit: ${req.params.id}` });
};

// delete outfit
// route : DELETE /nicefit/:id
// private
const deleteFit = (req, res) => {
  res.status(200).json({ message: `delete outfit: ${req.params.id}` });
};

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
