const express = require('express');
const router = express.Router();

// @route   GET admin/test
// @dec     Test admin route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'admin works' }));

module.exports = router;