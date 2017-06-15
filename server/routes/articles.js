const express = require('express');
const router = express.Router()
const articlesController = require('../controllers/articlesController');

router.get('/',articlesController.findAll)

router.post('/',articlesController.create)

// router.put('/:id',articlesController.update)
//
// router.delete('/:id',articlesController.delete)

module.exports = router;