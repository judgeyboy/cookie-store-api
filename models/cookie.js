const mongoose = require('../config/mongo.config');

let cookieSchema = mongoose.Schema({
  name: { type: String, unique: true },
  description: String,
  price: Number
});

let Cookie = mongoose.model('Cookie', cookieSchema);

module.exports = Cookie;