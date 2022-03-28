const express = require("express");
const router = express.Router();
const {
  getHome,
  addFit,
  updateFit,
  deleteFit,
} = require("../controllers/niceFItController");

router.route('/').get(getHome).post(addFit);
router.route('/:id').put(updateFit).delete(deleteFit);


module.exports = router;
