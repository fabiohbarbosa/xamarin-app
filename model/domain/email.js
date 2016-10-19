var Mongoose = require('../../config/mongo-connection');

var mongoose = new Mongoose();
var Schema = mongoose.Schema;

var EmailSchema = new Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  number: Integer,
  raffled: Boolean
});

module.exports = mongoose.model('Email', EmailSchema);
