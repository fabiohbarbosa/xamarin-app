var mongoose = require('mongoose');
var debug = require('debug')('xamarin-app:mongo-connection');

var isConnected = false;
var mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost/xamarinappdb';

module.exports = function() {
  if (isConnected) {
    debug('Mongo already connect');
    return;
  }

  isConnected = true;
  var con = mongoose.connect(mongoUrl, function(err) {
    if (!err) {
      debug('Succeeded connected to: ' + mongoUrl);
      return;
    }
    isConnected = false;
    console.error('Error connecting to: ' + mongoUrl + '. ' + err);
    process.exit(1);
  });
  return mongoose;
};
