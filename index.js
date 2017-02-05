var request = require('request');
let data = 'hello';

var options = {
  url: 'http://api.github.com/users/charleskuncheria',
  headers: {
    'User-Agent': 'request'
  }
};

module.exports = {
  msg: data,
  req: function (cb) {
    request(options, cb);
  }
};