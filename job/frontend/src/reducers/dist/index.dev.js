"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _authReducer = _interopRequireDefault(require("./authReducer"));

var _jobReducer = _interopRequireDefault(require("./jobReducer"));

var _mcqReducer = _interopRequireDefault(require("./mcqReducer"));

var _searchReducer = _interopRequireDefault(require("./searchReducer"));

var _medalReducer = _interopRequireDefault(require("./medalReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  auth: _authReducer["default"],
  job: _jobReducer["default"],
  search: _searchReducer["default"],
  mcq: _mcqReducer["default"],
  medals: _medalReducer["default"]
});

exports["default"] = _default;