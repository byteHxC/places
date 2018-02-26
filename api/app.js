const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const jwtMiddleware = require('express-jwt');

// secrets
const secrets = require('./config/secrets');
// routes
const places = require('./routes/places');
const users = require('./routes/users');
const sessions = require('./routes/sessions');
const favorites = require('./routes/favorites')
const visits = require('./routes/visits')
const visitsPlaces = require('./routes/visitsPlaces');
const applications = require('./routes/applications');
// database
const db = require('./config/database');
db.connect();

// midlewares
const findAppBySecret = require('./middlewares/findAppBySecret');
const findAppByApplicationId = require('./middlewares/findAppByApplicationId');
const authApp = require('./middlewares/authApp')();
const allowCORs = require('./middlewares/allowCORs')();

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// secure api
app.use(findAppBySecret);
app.use(findAppByApplicationId);
// app.use(authApp.unless({method: 'OPTIONS'}));
app.use(allowCORs.unless({path: '/public'}));
// Authenticate JWT

// app.use(
	jwtMiddleware({ secret: secrets.jwtSecret })
		.unless({ path: ['/sessions', '/users'], method: ['GET', 'OPTIONS']})

app.use('/places', places);
app.use('/places', visitsPlaces);
app.use('/users', users);
app.use('/sessions', sessions)
app.use('/favorites', favorites);
app.use('/visits', visits)
app.use('/applications', applications);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json(err);
});

module.exports = app;
