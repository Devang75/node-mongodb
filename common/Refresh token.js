const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const RefreshToken = require('../models/refreshToken');

// Function to generate tokens
const generateTokens = (userId) => ({
  accessToken: jwt.sign({ id: userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' }),
  refreshToken: jwt.sign({ id: userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ message: 'Authentication failed' });

    const { accessToken, refreshToken } = generateTokens(user._id);
    await RefreshToken.create({ token: refreshToken, user: user._id });
    res.json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Refresh token route
router.post('/refresh', async (req, res) => {
  try {
    const { token } = req.body;
    const storedToken = await RefreshToken.findOne({ token });
    if (!storedToken) return res.status(403).json({ message: 'Refresh token is not in database!' });

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid refresh token!' });

      const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
      res.json({ accessToken });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
