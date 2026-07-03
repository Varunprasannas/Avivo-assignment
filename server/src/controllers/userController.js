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

async function createUser(req, res, next) {
  try {
    const user = req.body;
    if (!user.firstName || !user.lastName || !user.email) {
      return res.status(400).json({ error: 'Bad Request', message: 'firstName, lastName and email are required fields.' });
    }
    const newUser = await userModel.create(user);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Bad Request', message: 'Invalid user ID.' });
    }
    const success = await userModel.remove(id);
    if (!success) {
      return res.status(404).json({ error: 'Not Found', message: 'User not found.' });
    }
    res.status(200).json({ message: 'User deleted successfully.', id });
  } catch (err) {
    next(err);
  }
}

module.exports = { getUsers, health, createUser, deleteUser };
