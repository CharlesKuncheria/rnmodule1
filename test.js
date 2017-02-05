var mod = require('./index.js');

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.name + " is the name");
    console.log(info.company + " is the company");
  }
};

mod.req(callback);