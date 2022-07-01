const express = require("express");
const router = express.Router();
const {
  getHome,
  getProfile,
  addFit,
  updateFit,
  deleteFit,
} = require("../controllers/niceFItController");

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getHome).post(protect, addFit);
router.route('/:id').put(protect, updateFit).delete(protect, deleteFit).get(protect, getProfile)
router.route('/profile').get(protect, getProfile);


module.exports = router;
