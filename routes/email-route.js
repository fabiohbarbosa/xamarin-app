var express = require('express');
var HttpStatus = require('http-status-codes');
var debug = require('debug')('xamarin-app:routes:email');
var validator = require('validator');

var Email = require('../model/domain/email');
var router = express.Router();

var uri = '/api/email';

router.post(uri, function(req, res, next) {
  var emailBody = req.body.email;

  if (!emailBody || !validator.isEmail(emailBody)) {
    debug('Invalid body request');
    res.status(HttpStatus.BAD_REQUEST).send();
    return;
  }

  var request = new Email();
  request.email = emailBody;

  request.save(function(err) {
    if (err && err.code === 11000) {
      debug('Email '+emailBody+ ' already exist');
      debug(err);
      res.status(HttpStatus.BAD_REQUEST).send();
      return;
    } else if (err) {
      errHandler(err);
      return;
    }
    res.status(HttpStatus.NO_CONTENT).send();
  });

});

router.delete(uri, function(req, res, next) {
  Email.remove({}, function(err) {
    if (err) {
      errHandler(err);
      return;
    }
    debug('All emails deleted');
    res.status(HttpStatus.NO_CONTENT).send();
  })
});

function errHandler(res) {
  debug('Internal server error');
  debug(err);
  res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
}

module.exports = router;
