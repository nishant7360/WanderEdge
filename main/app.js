const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const { json } = require('stream/consumers');
const tourRouter = require('./routes/tourRoute.js');
const usersRouter = require('./routes/userRoute.js');
const AppError = require('./utils/appError.js');
const globalErrorHandler = require('./controllers/errorController.js');
const reviewRouter = require('./routes/reviewRoutes.js');
const viewRouter = require('./routes/viewRoutes.js');
const compression = require('compression');
const cookiePareser = require('cookie-parser');
const bookingRouter = require('./routes/bookingRoutes.js');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePareser());
const isDev = process.env.NODE_ENV !== 'production';

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: ["'self'"],

        scriptSrc: ["'self'", 'https://js.stripe.com', 'https://unpkg.com'],
        scriptSrcElem: ["'self'", 'https://js.stripe.com', 'https://unpkg.com'],

        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          'https://fonts.googleapis.com',
          'https://cdnjs.cloudflare.com',
        ],
        styleSrcElem: [
          "'self'",
          "'unsafe-inline'",
          'https://fonts.googleapis.com',
          'https://cdnjs.cloudflare.com',
        ],

        fontSrc: [
          "'self'",
          'https://fonts.gstatic.com',
          'https://cdnjs.cloudflare.com',
          'data:',
        ],

        frameSrc: ["'self'", 'https://js.stripe.com'],

        connectSrc: [
          "'self'",
          'https://api.stripe.com',
          'https://js.stripe.com',
          'https://unpkg.com',
        ],

        imgSrc: ["'self'", 'data:', 'blob:'],
      },
    },
  })
);

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, try again in an hour',
});

app.use('/api', limiter);

app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' }));

app.use(mongoSanitize());

app.use(hpp());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.cookies);
  next();
});

app.use(compression());

app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);

app.use((req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
