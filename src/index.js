// use file .env
require('dotenv').config();

// express library of nodejs
const express = require('express');

// logger library
const morgan = require('morgan');

// templates view engine(library to render html)
const handlebars = require('express-handlebars');
const path = require('path');

// route init
const route = require('./routes');

// connect mongodb
const db = require('./config/db');
db.connect();

const methodOverride = require('method-override');

const PORT = process.env.PORT;
const app = express();

// use morgan to log http method
app.use(morgan('combined'));

// use template engine
app.engine('hbs', handlebars.engine({
  // config extention file from 'handlebars' to 'hbs'
  extname: 'hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}));
// tell express app: view engine is handlebars
app.set('view engine', 'hbs');
// set views folder path to render html
app.set('views', path.join(__dirname, 'resources', 'views'));

// config public folder for static file
app.use(express.static(path.join(__dirname, 'public')));

// use middleware to handle data
app.use(express.urlencoded({ extended: true })); // form data
app.use(express.json()); // XMLHttpRequest, Ajax, fetch, axios

// use method override library to override get/post -> put/patch/delete
app.use(methodOverride('_method'));

// config route
route(app);

app.listen(PORT, () => {
  console.log('App is listening on port', PORT);
})