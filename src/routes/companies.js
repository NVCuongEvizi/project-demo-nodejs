const express = require('express');
const router = express.Router();
const companiesController = require('../app/controllers/CompaniesController');
router.get('/create', companiesController.create);
router.post('/store', companiesController.store);
router.get('/:slug', companiesController.show);
router.get('/', companiesController.index);

module.exports = router;