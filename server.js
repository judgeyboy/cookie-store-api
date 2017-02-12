const express = require('express'),
      app = express();

app.use('/api', require('./controllers/index'));

app.listen(3000, () => {
  console.log('App listening on port 3000');
});