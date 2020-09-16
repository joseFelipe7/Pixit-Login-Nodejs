const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');

const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRoute');
const homeRouter = require('./routes/homeRoute');
const forgoutRouter = require('./routes/forgoutPassRoute');
const apiLoginRouter = require('./routes/api/login')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//configutando session
app.use(session({
  secret:'8f8b55b5c9fcc5da13f45c273a066b48',
  resave:true,
  saveUninitialized:true
}));

//rotas
app.use('', homeRouter)
app.use('/cadastre-se', registerRouter);
app.use('/login', loginRouter);
app.use('/recuperar-senha', forgoutRouter);

//consultas dinamicas
app.use('/api/login', apiLoginRouter);


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

module.exports = app;
