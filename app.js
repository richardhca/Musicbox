const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

// Create database connection by running this script
require('./config/createConnection');

// Init app
const app = express();

// use express-session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/fontawesome', express.static(
    path.join(__dirname + '/node_modules/@fortawesome/fontawesome-free/')));

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const trackRoute = require('./routes/track');
const playlistRoute = require('./routes/playlist');
const playlistsRoute = require('./routes/playlists');
const uploadRoute = require('./routes/upload');
const albumRoute = require('./routes/album');


app.use('/', indexRouter);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/logout', logoutRoute);
app.use('/track', trackRoute);
app.use('/playlist', playlistRoute);
app.use('/playlists', playlistsRoute);
app.use('/user', userRouter);
app.use('/upload', uploadRoute);
app.use('/album', albumRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
