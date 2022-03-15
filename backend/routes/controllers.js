const express = require('express');
const router = express.Router();

router.get('/outfits', (req, res) => {
    res.status(200).json({message: 'get outfits'});
  });

module.exports = router