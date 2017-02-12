const express = require('express'),
      app = express(),
      cors = require('./middleware/cors'),
      controllers = require('./controllers');

app.use(cors);

app.use('/api', controllers);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});