const express = require("express");
const router = express.Router();
const {
  getHome,
  addFit,
  updateFit,
  deleteFit,
} = require("../controllers/niceFItController");

router.get("/", getHome);

router.post("/", addFit);

router.put("/:id", updateFit);

router.delete("/:id", deleteFit);

module.exports = router;
