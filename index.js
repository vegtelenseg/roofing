var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index', { val: ""});
});
app.get('/about', function(request, response) {
  response.render('pages/about', { val: "About"});
});

app.get('/gallery', function(request, response) {
  response.render('pages/gallery', { val: "Projects"});
});

app.get('/contact', function(request, response) {
  response.render('pages/contact', {val: "Contact"});
});

app.get('/codes', function(request, response) {
  response.render('pages/codes', {val: ""});
});

app.get('/icons', function(request, response) {
  response.render('pages/icons', {val: ""});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
