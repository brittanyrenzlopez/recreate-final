const express = require('express');
const router = express.Router();
// User route
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

module.exports = router;
