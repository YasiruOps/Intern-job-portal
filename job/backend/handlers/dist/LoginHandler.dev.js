"use strict";

var User = require('../models/User');

var jwt = require('jsonwebtoken');

var bcrypt = require("bcrypt");

function LoginHandler(request, response) {
  //search for usernme and pword
  var email = request.body.email;
  var password = request.body.password;
  User.findOne({
    email: email
  }).then(function _callee(user) {
    var cryptedPassword;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (user) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", response.status(400).json({
              msg: "Email does not exist"
            }));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(bcrypt.hash(password, 12));

          case 4:
            cryptedPassword = _context.sent;

            if (!(user.password != cryptedPassword)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", response.status(400).json({
              msg: "Incorrect password"
            }));

          case 7:
            // const token = jwt.sign({ foo:  }, 'shhhhh');
            console.log(user, "user");
            return _context.abrupt("return", response.status(200).json({
              user: user
            }));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  })["catch"](function (err) {
    response.status(500).json({
      msg: "Server Error"
    });
  });
}

module.exports = LoginHandler;