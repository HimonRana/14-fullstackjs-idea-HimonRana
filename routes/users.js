const express = require('express');
const router = express.Router();

// @route   GET users/test
// @dec     Test users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'users works' }));

module.exports = router;