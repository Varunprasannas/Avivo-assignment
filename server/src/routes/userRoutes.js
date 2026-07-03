'use strict';

const express = require('express');
const router = express.Router();
const { getUsers, health, createUser, deleteUser } = require('../controllers/userController');

router.get('/users', getUsers);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.get('/health', health);

module.exports = router;
