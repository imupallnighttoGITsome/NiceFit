const express = require("express");
const router = express.Router();
const {
  getHome,
  addFit,
  updateFit,
  deleteFit,
} = require("../controllers/niceFItController");

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getHome).post(protect, addFit);
router.route('/:id').put(protect, updateFit).delete(protect, deleteFit);


module.exports = router;
