const Company = require('../models/Company');
const { multipleMongooseToObject, MongooseToObject } = require('../../util/mongoose');

class CompaniesController {
  // [GET] /
  index(req, res, next) {
    Company.find()
      .then(companies => {
        res.render('companies', { 
          companies: multipleMongooseToObject(companies) 
        })
      })
      .catch(next)
  }
  // [GET] /:slug
  show(req, res, next) {
    Company.findOne({ slug: req.params.slug })
      .then(company => {
        res.render('company', { 
          company: MongooseToObject(company) 
        })
      })
      .catch(err => {
        res.redirect('/404');
        next(err);
      })
  }
  // [GET] /create
  create(req, res, next) {
    res.render('create');
  }
  // [POST] /store
  store(req, res, next) {
    // if(!res.body?.name || !res.body?.address || !res.body?.website || !res.body?.logo) {
    //   console.log('name', res.body?.name, res.body?.address, res.body?.website, res.body?.logo)
    //   res.status(400).json({ 'message': 'Miss required field' });
    // }
    const company = new Company(req.body)
    company.save()
      .then(newCompany => {
        if(newCompany) res.redirect('/companies');
      })
      .catch(next)
  }
}

module.exports = new CompaniesController;