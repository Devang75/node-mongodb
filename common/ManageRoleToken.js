const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET; // Use environment variable for JWT secret

// Middleware to verify token and check role
const checkRole = (roles) => (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send('Unauthorized');
  }

  const token = authHeader.split(' ')[1]; // Get token from header
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
