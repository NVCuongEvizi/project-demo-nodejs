const CompaniesController = require('../app/controllers/CompaniesController');
const companiesRouter = require('./companies');
const route = (app) => {
  app.use('/companies', companiesRouter);
  app.get('/', CompaniesController.index);
}

module.exports = route;