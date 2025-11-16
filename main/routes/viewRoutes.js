const express = require('express');
const viewsController = require('../controllers/viewsController.js');
const authController = require('../controllers/authController.js');
const bookingController = require('../controllers/bookingController.js');
const router = express.Router();

router.get(
  '/',
  bookingController.createBookinCheckout,
  authController.isLoggedIn,
  viewsController.getOverview
);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/me', authController.protect, viewsController.getAccount);
router.get('/my-tours', authController.protect, viewsController.getMyTours);
router.get('/signup', authController.isLoggedIn, viewsController.getSignUp);
router.get(
  '/manage-tours',
  authController.isLoggedIn,
  viewsController.manageTours
);

router.get('/my-reviews', authController.protect, viewsController.getMyReviews);
router.get(
  '/create-review',
  authController.protect,
  viewsController.getReviewPostForm
);
router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
