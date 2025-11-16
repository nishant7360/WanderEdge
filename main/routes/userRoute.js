const express = require('express');
const uerControllers = require('../controllers/user-controller.js');
const router = express.Router();
const authController = require('../controllers/authController.js');
const reviewController = require('../controllers/reviewController.js');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logOut);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

router.patch(
  '/updateMe',
  authController.protect,
  uerControllers.uploadUserPhoto,
  uerControllers.resizeUserPhoto,
  uerControllers.updateMe
);
router.delete('/deleteMe', authController.protect, uerControllers.deleteMe);

router.get(
  '/me',
  authController.protect,
  uerControllers.getMe,
  uerControllers.getUser
);

router.use(authController.protect);
router.use(authController.restrictTo('admin'));
router
  .route('/')
  .get(uerControllers.getAllUsers)
  .post(uerControllers.createUser);
router
  .route('/:id')
  .get(uerControllers.getUser)
  .patch(uerControllers.updateUser)
  .delete(uerControllers.deleteUser);

module.exports = router;
