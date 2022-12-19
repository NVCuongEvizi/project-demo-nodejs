const CompaniesController = require('../app/controllers/CompaniesController');
const SiteController = require('../app/controllers/SiteController');
const companiesRouter = require('./companies');
const route = (app) => {
  app.use('/companies', companiesRouter);
  app.get('/404', SiteController.pageNotFound);
  app.get('/', CompaniesController.index);
}

module.exports = route;