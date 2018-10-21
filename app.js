// Module dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const session    = require('express-session');
const bodyParser = require('body-parser');
const createError = require('http-errors');
// const fileupload = require('express-fileupload'); // Bruges ved /billed_upload (uden resize)


const app = express();

// =====================================================================
// Indstillinger, som f.eks. bodyParser, views, session, osv.

//support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'webintegrator',
  rolling: true, // Holder liv i funktionen, så længe der er aktivitet på siden
	resave: false,
	saveUninitialized: true,
	cookie: { 
    secure: false, // false = http, true = https
    maxAge: 20 * 60 * 1000 } // Hvis ikke man er aktiv vil man blive logget af efter 20 minutter
}));

// =====================================================================
// Routes

require('./routes/site/index')(app); // forside

require('./routes/site/artikelKategori')(app); // kategori side
require('./routes/site/artikel')(app); // artikel side
require('./routes/site/artikelArkiv')(app); // arkiv side
require('./routes/site/artikelArkivFind')(app); // arkivFind side

require('./routes/site/kontakt')(app); // kontakt side
require('./routes/site/redaktion')(app); // kontakt side
require('./routes/site/sponsor')(app); // sponsor side


require('./routes/admin/login')(app);
require('./routes/admin/index')(app);

require('./routes/admin/artikel_oversigt')(app);
require('./routes/admin/artikel_ret')(app);
require('./routes/admin/artikel_opret')(app);

require('./routes/admin/redaktion_oversigt')(app);
require('./routes/admin/redaktion_ret')(app);
require('./routes/admin/redaktion_opret')(app);
require('./routes/admin/redaktion_aktiver')(app);

require('./routes/admin/kontaktoplysning_ret')(app);
require('./routes/admin/kontaktbesked_oversigt')(app);

require('./routes/admin/kommentar_oversigt')(app);
require('./routes/admin/kommentar_ret')(app);

require('./routes/admin/kategori_sortering')(app);


// =====================================================================
// Use 404 siden

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = 3000;
console.log(`Serveren kører på http://localhost:${port}`);
app.listen(port);