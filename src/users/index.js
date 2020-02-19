'use strict';

const errors = require('../errors');

exports.findAll = (req, res, next) => {
  // Simulate task list, normally this would be retrieved from a database
  const tasks = [
    {'_id': 1, 'name': 'user1'},
    {'_id': 2, 'name': 'user2'},
    {'_id': 3, 'name': 'user3'}
  ];

  res.status(200).json(tasks);
};

exports.buggyRoute = (req, res, next) => {
  // Simulate a custom error
  next(errors.newHttpError(400, 'bad request'));
};
