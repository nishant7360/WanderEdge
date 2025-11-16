const Review = require('../models/reviewModel.js');
const catchAsyn = require('../utils/catchAsyn.js');
const handlerFactory = require('../controllers/handlerFactory.js');

exports.getAllReview = handlerFactory.getAll(Review);

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
const Booking = require('../models/bookingModel');

exports.createReview = catchAsyn(async (req, res, next) => {
  const booking = await Booking.findOne({
    tour: req.body.tour,
    user: req.body.user,
  });

  if (!booking) {
    return next(
      new AppError("You can review only if you've booked the tour", 403)
    );
  }

  const review = await Review.create({
    review: req.body.review,
    rating: req.body.rating,
    tour: req.body.tour,
    user: req.body.user,
  });

  res.status(201).json({
    status: 'success',
    data: {
      review,
    },
  });
});

exports.getReview = handlerFactory.getOne(Review);

exports.deleteReview = handlerFactory.deleteOne(Review);
exports.updateReview = handlerFactory.updateOne(Review);
