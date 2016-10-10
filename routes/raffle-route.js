var express = require('express');
var HttpStatus = require('http-status-codes');
var debug = require('debug')('xamarin-app:routes:email');

var Email = require('../model/domain/email');
var service = require('../model/service/raffle-service');
var router = express.Router();

var uri = '/api/raffle';

router.delete(uri, function(req, res, next) {
  cancelRaffle(function(err) {
    if (err) {
      errHandler(err);
      return;
    }
    res.status(HttpStatus.NO_CONTENT).send();
  });
});

router.get(uri, function(req, res, next) {
  Email.find({ raffled: true }, { email: true }, function(err, email) {
    if (err) {
      errHandler(err);
      return;
    }

    if (!email || email.length < 1) {
      res.status(HttpStatus.FORBIDDEN).send();
      return;
    }
    res.status(HttpStatus.OK).json(email[0]);
  });
});

router.post(uri, function(req, res, next) {
  cancelRaffle(function(err) {
    if (err) {
      errHandler(err);
      return;
    }

    startRaffle(function(err2, email) {
      if (err2) {
        errHandler(err);
        return;
      }
      res.status(HttpStatus.OK).json(email);
    });

  })
});

function startRaffle(callback) {
  Email.find({}, { email: true }, function(err, emails) {
    if (err) {
      callback(err)
      return;
    }

    var rand = emails[Math.floor(Math.random() * emails.length)];

    Email.update({ email: rand.email }, { raffled: true }, function(err) {
      if (err) {
        callback(err)
        return;
      }
      callback(null, rand)
    });

  });
}
function cancelRaffle(callback) {
  Email.update({}, { raffled: false }, { multi: true }, function(err) {
    if (err) {
      callback(err)
      return;
    }
    callback();
  });
}

function errHandler(res) {
  debug('Internal server error');
  debug(err);
  res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
}

module.exports = router;
