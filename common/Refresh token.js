const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Your user model
const RefreshToken = require('../models/refreshToken'); // Your refresh token model

// Function to generate tokens
function generateTokens(user) {
  const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
  return { accessToken, refreshToken };
}

// Login route
router.post('/login', async (req, res) => {
  // Authenticate user...
  const user = await User.findOne({ email: req.body.email });
  // Generate tokens
  const { accessToken, refreshToken } = generateTokens(user);
  // Save refresh token in the database
  await new RefreshToken({ token: refreshToken, user: user._id }).save();
  // Send tokens to client
  res.json({ accessToken, refreshToken });
});

// Refresh token route
router.post('/refresh', async (req, res) => {
  const { token } = req.body;
  // Check if token exists in database
  const storedToken = await RefreshToken.findOne({ token });
  if (!storedToken) {
    return res.status(403).json({ message: 'Refresh token is not in database!' });
  }
  // Verify refresh token
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid refresh token!' });
    }
    // Generate new access token
    const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    res.json({ accessToken });
  });
});

module.exports = router;
