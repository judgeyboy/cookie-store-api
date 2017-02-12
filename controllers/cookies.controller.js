const express = require('express'),
      router = express.Router();

router.get('/', (req, res, next) => {
  res.json([
    'cookie1', 'cookie2', 'cookie3', 'cookie4'
  ])
});

module.exports = router;