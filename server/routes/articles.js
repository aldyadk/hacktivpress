const express = require('express');
const router = express.Router()
const articlesController = require('../controllers/articlesController');

router.get('/',articlesController.getAll)

router.get('/:id',articlesController.getOne)

router.get('/author/:param',articlesController.getByAuthor)

router.get('/category/:param',articlesController.getByCategory)

router.post('/',articlesController.create)

router.put('/:id',articlesController.update)

router.delete('/:id',articlesController.remove)

module.exports = router;