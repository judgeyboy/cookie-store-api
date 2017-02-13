const express = require('express'),
      router = express.Router(),
      cookieRepository = require('../repositories/cookie.repository');

router.get('/', (req, res) => {
  cookieRepository.getAll()
    .then(cookies => res.json(cookies))
    .catch(error => res.status(500).send(error));
});

module.exports = router;