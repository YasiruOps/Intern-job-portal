"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setgamesplayed = exports.setmedals = void 0;

var _types = require("../actions/types");

var setmedals = function setmedals(payload) {
  return {
    type: _types.SET_MEDAL,
    payload: payload
  };
};

exports.setmedals = setmedals;

var setgamesplayed = function setgamesplayed(payload) {
  return {
    type: _types.SET_GPLAYED,
    payload: payload
  };
};

exports.setgamesplayed = setgamesplayed;