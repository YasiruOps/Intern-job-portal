const express = require('express');
const router = express.Router()


const UploadPdfHandler = require('../handlers/UploadPdfHandler');

router.route('/').post((request, response) => {UploadPdfHandler(request, response) });

module.exports = router;