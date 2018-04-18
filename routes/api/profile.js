const express = require('express');
const router = express.Router();
// Profile route /api/profile/
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

module.exports = router;
