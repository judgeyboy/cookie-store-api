const cookies = require('../models/cookie');

class CookieRepository {
  getAll(){
    return cookies.find({})
      .then(cookies => Promise.resolve(cookies))
      .catch(error => Promise.reject(error))
  }
}

module.exports = new CookieRepository();