const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cookie-store');
mongoose.Promise = global.Promise;

module.exports = mongoose;