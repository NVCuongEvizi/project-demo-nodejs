const express = require('express');
const router = express.Router();
const companiesController = require('../app/controllers/CompaniesController');
router.use('/:slug', companiesController.show);
router.use('/', companiesController.index);

module.exports = router;