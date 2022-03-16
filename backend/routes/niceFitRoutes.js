const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/niceFItController');


router.get('/', getHome);

  router.post('/', (req, res) => {
    res.status(200).json({message: 'add outfit'});
  });

  router.put('/:id', (req, res) => {
    res.status(200).json({message: `update outfit: ${req.params.id}`});
  });


  router.delete('/:id', (req, res) => {
    res.status(200).json({message: `delete outfit: ${req.params.id}`});
  });


module.exports = router