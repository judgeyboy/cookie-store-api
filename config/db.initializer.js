const Cookies = require('../models/cookie');

let seed_cookies = [
  { name: 'Banana Rama', description: 'Our fantastic banana flavoured chip cookie', price: 1.2 },
  { name: 'Smarty Sensation', description: 'Cookie covered with smarties', price: 1.4 },
  { name: 'Classic Chip', description: 'Classic Chip...simple, elegant, classic', price: 1.0 }
];

Cookies.insertMany(seed_cookies, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Cookies imported successfully');
  }
});