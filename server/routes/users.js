const express = require('express');
const router = express.Router()
const usersController = require('../controllers/users');

router.get('/',usersController.getAll)

router.get('/:id',usersController.getOne)

router.post('/',usersController.create)

router.post('/login',usersController.login)

router.delete('/',usersController.remove)


module.exports = router;