'use strict';

const router = require('express').Router();
const middleware = require('./src/middleware');
const errors = require('./src/errors');
const healthRouter = require('./src/health/router');
const taskRouter = require('./src/tasks/router');

// middleware
router.use(middleware.doSomethingInteresting);

// routers
router.use('/health', healthRouter);
router.use('/tasks', taskRouter);

// manejador de errores
router.use(errors.errorHandler);
router.use(errors.nullRoute);

// Export the router
module.exports = router;
