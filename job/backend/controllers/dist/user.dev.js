"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require("../helpers/validation"),
    validateEmail = _require.validateEmail,
    validateLength = _require.validateLength,
    validateUsername = _require.validateUsername;

var bcrypt = require("bcrypt");

var _require2 = require("../services/OTP"),
    generateOTP = _require2.generateOTP;

var _require3 = require("../services/MAIL"),
    sendMail = _require3.sendMail;

var User = require("../models/User");

var Education = require("../models/Educations");

var Experience = require("../models/Experience");

exports.register = function _callee(req, res) {
  var _res$send, _req$body, first_name, last_name, password, email, location, mobile, bio, dob, picture, cover, upProfile, check, cryptedPassword, otpGenerated, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, first_name = _req$body.first_name, last_name = _req$body.last_name, password = _req$body.password, email = _req$body.email, location = _req$body.location, mobile = _req$body.mobile, bio = _req$body.bio, dob = _req$body.dob, picture = _req$body.picture, cover = _req$body.cover;
          upProfile = 0;

          if (validateEmail(email)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: "invalid email address"
          }));

        case 5:
          _context.next = 7;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 7:
          check = _context.sent;

          if (!check) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: "This email address already exists,try with a different email address"
          }));

        case 10:
          if (validateLength(first_name, 3, 30)) {
            _context.next = 12;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: "first name must between 3 and 30 characters."
          }));

        case 12:
          if (validateLength(last_name, 3, 30)) {
            _context.next = 14;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: "last name must between 3 and 30 characters."
          }));

        case 14:
          if (picture != null && picture.trim().length > 0) {
            upProfile++;
          }

          if (cover != null && cover.trim().length > 0) {
            upProfile++;
          }

          _context.next = 18;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 12));

        case 18:
          cryptedPassword = _context.sent;
          otpGenerated = generateOTP();
          _context.next = 22;
          return regeneratorRuntime.awrap(new User({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: cryptedPassword,
            otp: otpGenerated,
            location: location,
            mobile: mobile,
            bio: bio,
            picture: picture,
            dob: dob,
            cover: cover,
            upProfile: upProfile
          }).save());

        case 22:
          user = _context.sent;
          _context.next = 25;
          return regeneratorRuntime.awrap(sendMail({
            to: email,
            OTP: otpGenerated
          }));

        case 25:
          res.send((_res$send = {
            _id: user._id,
            username: user.username,
            picture: user.picture,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            upProfile: user.upProfile,
            dob: user.dob
          }, _defineProperty(_res$send, "picture", user.picture), _defineProperty(_res$send, "cover", user.cover), _defineProperty(_res$send, "message", "Register Success !"), _res$send));
          _context.next = 31;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });

        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28]]);
};

module.exports.verifyEmail = function _callee2(req, res) {
  var _req$body2, email, otp, user, updatedUser;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("call unah email");
          _context2.prev = 1;
          _req$body2 = req.body, email = _req$body2.email, otp = _req$body2.otp;
          _context2.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 5:
          user = _context2.sent;

          if (user) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", "User not found");

        case 8:
          if (!(user && user.otp !== otp)) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", "Invalid OTP");

        case 10:
          _context2.next = 12;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(user._id, {
            active: true
          }, {
            "new": true
          }));

        case 12:
          updatedUser = _context2.sent;
          res.send(updatedUser);
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: _context2.t0.message
          });

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 16]]);
};

exports.updateuser = function _callee3(req, res) {
  var _req$body3, first_name, last_name, email, location, mobile, bio, dob, upProfile, updated;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body3 = req.body, first_name = _req$body3.first_name, last_name = _req$body3.last_name, email = _req$body3.email, location = _req$body3.location, mobile = _req$body3.mobile, bio = _req$body3.bio, dob = _req$body3.dob, upProfile = _req$body3.upProfile; //const updated = await User.findById(req.params.id);

          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(req.params.id, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            location: location,
            mobile: mobile,
            dob: dob,
            bio: bio,
            upProfile: upProfile
          }, {
            "new": true
          }));

        case 4:
          updated = _context3.sent;
          res.send(_objectSpread({}, updated.toObject()));
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getProfile = function _callee4(req, res) {
  var id, profile, education, experience;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id; // const user = await User.findById(req.user.id);

          _context4.next = 4;
          return regeneratorRuntime.awrap(User.findById(id));

        case 4:
          profile = _context4.sent;

          if (profile) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.json({
            ok: false
          }));

        case 7:
          _context4.next = 9;
          return regeneratorRuntime.awrap(profile.populate("first_name last_name picture mobile location bio education"));

        case 9:
          _context4.next = 11;
          return regeneratorRuntime.awrap(Education.find({
            user: id
          }));

        case 11:
          education = _context4.sent;
          _context4.next = 14;
          return regeneratorRuntime.awrap(Experience.find({
            user: id
          }));

        case 14:
          experience = _context4.sent;
          res.json(_objectSpread({}, profile.toObject(), {
            education: education,
            experience: experience
          }));
          _context4.next = 21;
          break;

        case 18:
          _context4.prev = 18;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: _context4.t0.message
          });

        case 21:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 18]]);
};

exports.updateDetailsExperience = function _callee5(req, res) {
  var _req$body4, companyName, role, updated;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body4 = req.body, companyName = _req$body4.companyName, role = _req$body4.role; //const updated = await Experience.findById(req.params.id);

          _context5.next = 4;
          return regeneratorRuntime.awrap(Experience.findByIdAndUpdate(req.params.id, {
            companyName: companyName,
            role: role
          }, {
            "new": true
          }));

        case 4:
          updated = _context5.sent;
          _context5.next = 7;
          return regeneratorRuntime.awrap(updated.populate("user", "first_name last_name"));

        case 7:
          res.json(updated);
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: _context5.t0.message
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.updateProfilePicture = function _callee6(req, res) {
  var url;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          url = req.body.url;
          _context6.next = 4;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(req.params.id, {
            picture: url
          }));

        case 4:
          res.json(url);
          _context6.next = 10;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            message: _context6.t0.message
          });

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updateCover = function _callee7(req, res) {
  var url;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          url = req.body.url;
          _context7.next = 4;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate(req.params.id, {
            cover: url
          }));

        case 4:
          res.json(url);
          _context7.next = 10;
          break;

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          res.status(500).json({
            message: _context7.t0.message
          });

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //Education


exports.createEdu = function _callee8(req, res) {
  var post;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(new Education(req.body).save());

        case 3:
          post = _context8.sent;
          _context8.next = 6;
          return regeneratorRuntime.awrap(post.populate("user", "first_name last_name"));

        case 6:
          res.json(post);
          _context8.next = 12;
          break;

        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(500).json({
            message: _context8.t0.message
          }));

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 9]]);
}; //update


exports.updateDetailsEducation = function _callee9(req, res) {
  var _req$body5, school, degree, fstudy, sYear, sMonth, eYear, eMonth, grade, activity, updated;

  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$body5 = req.body, school = _req$body5.school, degree = _req$body5.degree, fstudy = _req$body5.fstudy, sYear = _req$body5.sYear, sMonth = _req$body5.sMonth, eYear = _req$body5.eYear, eMonth = _req$body5.eMonth, grade = _req$body5.grade, activity = _req$body5.activity; //const updated = await User.findById(req.params.id);

          _context9.next = 4;
          return regeneratorRuntime.awrap(Education.findByIdAndUpdate(req.params.id, {
            school: school,
            degree: degree,
            fstudy: fstudy,
            sYear: sYear,
            sMonth: sMonth,
            eYear: eYear,
            eMonth: eMonth,
            grade: grade,
            activity: activity
          }, {
            "new": true
          }));

        case 4:
          updated = _context9.sent;
          _context9.next = 7;
          return regeneratorRuntime.awrap(updated.populate("user", "first_name last_name"));

        case 7:
          res.json(updated);
          _context9.next = 13;
          break;

        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          res.status(500).json({
            message: _context9.t0.message
          });

        case 13:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 10]]);
}; // delete Education


exports.deleteEdu = function _callee10(req, res) {
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return regeneratorRuntime.awrap(Education.findByIdAndRemove(req.params.id));

        case 3:
          res.json({
            status: "ok"
          });
          _context10.next = 9;
          break;

        case 6:
          _context10.prev = 6;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", res.status(500).json({
            message: _context10.t0.message
          }));

        case 9:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; //Expri


exports.createExp = function _callee11(req, res) {
  var exp;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return regeneratorRuntime.awrap(new Experience(req.body).save());

        case 3:
          exp = _context11.sent;
          _context11.next = 6;
          return regeneratorRuntime.awrap(exp.populate("user", "first_name last_name"));

        case 6:
          res.json(exp);
          _context11.next = 12;
          break;

        case 9:
          _context11.prev = 9;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", res.status(500).json({
            message: _context11.t0.message
          }));

        case 12:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[0, 9]]);
}; //delete expricence


exports.deleteExp = function _callee12(req, res) {
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return regeneratorRuntime.awrap(Experience.findByIdAndRemove(req.params.id));

        case 3:
          res.json({
            status: "ok"
          });
          _context12.next = 9;
          break;

        case 6:
          _context12.prev = 6;
          _context12.t0 = _context12["catch"](0);
          return _context12.abrupt("return", res.status(500).json({
            message: _context12.t0.message
          }));

        case 9:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

exports.search = function _callee13(req, res) {
  var searchTerm, results;
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          searchTerm = req.params.searchTerm;
          _context13.next = 4;
          return regeneratorRuntime.awrap(User.find({
            $text: {
              $search: searchTerm
            }
          }).select("first_name last_name picture"));

        case 4:
          results = _context13.sent;
          res.json(results);
          _context13.next = 11;
          break;

        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
          res.status(500).json({
            message: _context13.t0.message
          });

        case 11:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[0, 8]]);
};