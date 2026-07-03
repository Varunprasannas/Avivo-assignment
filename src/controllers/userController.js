'use strict';

const userModel = require('../models/userModel');
const { testConnection } = require('../config/db');

async function getUsers(req, res, next) {
  try {
    let limit = parseInt(req.query.limit, 10);
    let skip = parseInt(req.query.skip, 10);
    if (isNaN(skip) || skip < 0) skip = 0;
    if (isNaN(limit) || limit <= 0) limit = 0;

    const { users, total } = await userModel.findAll({ limit, skip });

    res.status(200).json({
      users,
      total,
      skip,
      limit: limit || total,
    });
  } catch (err) {
    next(err);
  }
}

async function health(req, res, next) {
  try {
    await testConnection();
    res.status(200).json({
      status: 'ok',
      database: 'connected',
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getUsers, health };
