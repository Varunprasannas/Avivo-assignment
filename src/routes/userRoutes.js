'use strict';

const express = require('express');
const router = express.Router();
const { getUsers, health } = require('../controllers/userController');

router.get('/users', getUsers);
router.get('/health', health);

module.exports = router;
