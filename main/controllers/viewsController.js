const Tour = require('../models/tourModel.js');
const AppError = require('../utils/appError.js');
const User = require('../models/userModel.js');
const Bookings = require('../models/bookingModel.js');
const catchAsync = require('../utils/catchAsyn.js');
const Booking = require('../models/bookingModel.js');
const Review = require('../models/reviewModel.js');

exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All tours',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name', 404));
  }

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
};

exports.getSignUp = (req, res) => {
  res.status(200).render('signup', {
    title: 'Create new Account',
  });
};

exports.manageTours = (req, res) => {
  res.status(200).render('manageTours', {
    title: 'Manage Tours',
  });
};

exports.getReviewPostForm = catchAsync(async (req, res, next) => {
  const { tourId } = req.query;

  if (!tourId) {
    return next(new AppError('tourId missing in URL', 400));
  }

  const tour = await Tour.findById(tourId);
  const user = req.user;

  res.status(200).render('postReview', {
    title: 'Create review',
    tour,
    user,
  });
});

exports.getMyTours = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find({ user: req.user.id });

  const tourIDs = bookings.map((el) => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).render('overview', {
    title: 'My Tours',
    tours,
  });
});

exports.getMyReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find({ user: req.user.id }).populate({
    path: 'tour',
    select: 'name imageCover slug',
  });

  res.status(200).render('myReviews', {
    title: 'My Reviews',
    reviews,
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser,
  });
});
