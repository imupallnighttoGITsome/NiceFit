const express = require("express");
const router = express.Router();
const {
  getHome,
  addFit,
  updateFit,
  deleteFit,
  getProfile,
  deleteProfile
} = require("../controllers/niceFItController");

router.route('/').get(getHome).post(addFit);
router.route('/:id').put(updateFit).delete(deleteFit);
router.route('/user/:id').get(getProfile).put(deleteProfile).delete(deleteProfile);


module.exports = router;
