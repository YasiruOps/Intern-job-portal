"use strict";

var express = require('express');

var router = express.Router();

var GetCommentHandler = require("../handlers/GetCommentHandler");

var AddCommentHandler = require("../handlers/AddCommentHandler");

var DeleteCommentHandler = require("../handlers/DeleteCommentHandler"); //create


router.route('/').post(function (request, response) {
  AddCommentHandler(request, response);
}); //fetch

router.route('/:forumID').get(function (request, response) {
  GetCommentHandler(request, response);
}); //update

router.route('/update/:id').put(function (request, response) {
  EditJobOfferHandler(request, response);
}); //remove

router.route('/delete/:id')["delete"](function (request, response) {
  DeleteCommentHandler(request, response);
});
module.exports = router;