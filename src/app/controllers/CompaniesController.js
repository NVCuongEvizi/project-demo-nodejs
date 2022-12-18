const Company = require('../models/Company');

class CompaniesController {
  // [GET] /
  async index(req, res) {
    // res.render('companies');
    try {
      const companies = await Company.find();
      res.json(companies);
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  }
  // [GET] /:slug
  show(req, res) {
    res.render('company');
  }
}

module.exports = new CompaniesController;