const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');

// Init app
const app = express();


// mongodb connection
const mongoDB = 'mongodb+srv://arlenx:qwertyu8@cluster0-0dxo8.azure.mongodb.net/musicbox?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
// mongo error
db.on('error', console.error.bind(console, 'connection error:'));

// use express-session
app.use(session({
                    secret: 'secret',
                    resave: true,
                    saveUninitialized: false,
                }
        )
);

const userMiddleware = require('./middlewares/sessionMiddleware');
app.use(userMiddleware.isLoggedIn);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/aplayer',
        express.static(path.join(__dirname, 'node_modules/aplayer/dist')));

// app.use(function (req, res, next) {
//     // Available for all view templates
//     res.locals.isLoggedIn = req.session && req.session.userId;
//     next();
// });

const indexRouter = require('./routes/index');
// const userRouter = require('./routes/user');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');
const songRoute = require('./routes/song');
const albumRoute = require('./routes/album');


app.use('/', indexRouter);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/logout', logoutRoute);
app.use('/song', songRoute);
app.use('/album', albumRoute);
// app.use('/user', userRouter);


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
