const express = require("express");
const router = express.Router();
const {
  getHome,
  addFit,
  updateFit,
  deleteFit,
  getProfile
} = require("../controllers/niceFItController");

router.route('/').get(getHome).post(addFit);
router.route('/:id').put(updateFit).delete(deleteFit);
router.route('/user/:id').get(getProfile);


module.exports = router;
