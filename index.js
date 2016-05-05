/* *******************************************
 *                index.js
 *
 *   Author: André Reis
 *********************************************/
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));

// Resources (CSS, images, js, fonts)
app.use(express.static(`${__dirname}/resources`));

// views is directory for all template files
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');


/** ******************************************
 *            Web Pages Route
 *********************************************/
app.get('/', (request, response) => {
  response.render('pages/index');
});

app.get('/horarios', (request, response) => {
  response.render('pages/schedules');
});

app.get('/precos', (request, response) => {
  response.render('pages/prices');
});

app.get('/config', (request, response) => {
  response.render('pages/config');
});

app.get('/login', (request, response) => {
  response.render('pages/login', { message: request.flash('loginMessage') });
});

/** ******************************************
 *              Server Port
 *********************************************/
app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
