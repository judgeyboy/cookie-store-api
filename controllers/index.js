const express = require('express'),
      router = express.Router();

router.use('/cookies', require('./cookies.controller'));

module.exports = router;