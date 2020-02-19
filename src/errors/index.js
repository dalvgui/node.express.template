'use strict';

// Handle any errors that come up
exports.errorHandler = (err, req, res, next) => {
  if (err.status) {
      res.status(err.status).json({ 'message': err.message });
  }
  else {
      res.status(500).json({ message: 'internal server error' });
  }
};

// Handle case where user requests nonexistent endpoint
exports.nullRoute = (req, res, next) => {
  res.status(404).json({ message: 'not found' });
};

// Plantilla Nuevo error
// exports.newHttpError = (status, message) => {
//   let err;

//   if (message == null) {
//     err = new Error();
//   }
//   else {
//     err = new Error(message);
//   }

//   err.status = status;
//   return err;
// };
