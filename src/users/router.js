'use strict';

// Router
const router = require('express').Router();
const users = require('./index');

// Metodos
router.get('/', users.findAll);
router.post('/', users.buggyRoute);


module.exports = router;