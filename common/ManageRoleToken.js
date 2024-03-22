const jwt = require('jsonwebtoken');
const secret = 'your_jwt_secret'; // Replace with your JWT secret

// Middleware to verify token and check role
const checkRole = (roles) => (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]; // Get token from header
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send('Unauthorized');
    }
    if (roles.includes(decoded.role)) {
      next(); // User has the required role, proceed to the next middleware
    } else {
      return res.status(403).send('Forbidden');
    }
  });
};

module.exports = checkRole;
