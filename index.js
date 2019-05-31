const express        = require('express');
const path           = require('path');
const bodyParser     = require('body-parser');
const fs             = require('fs');
const url            = require('url');
const favicon        = require('serve-favicon');
const PORT           = process.env.PORT || 3000;
const app            = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');


// we got the css, but not images and js
app.use(express.static(__dirname + '/public'));

// ******** All routes here ****************
// app.use('/about', (req, res, next) => {
//   res.sendFile('about');
// });

app.get('/', (req, res, next) => {
  res.render('home');
});

app.get('/educator.html', (req, res, next) => {
  res.render('educator');
});

app.get('/sponsor.html', (req, res, next) => {
  res.render('sponsor');
});

app.get('/participant.html', (req, res, next) => {
  res.render('participant');
});

app.get('/volunteer.html', (req, res, next) => {
  res.render('volunteer');
});

app.listen(PORT, function() {
  console.log('App Started');
});
console.log(`Server is listening on port ${PORT}`);