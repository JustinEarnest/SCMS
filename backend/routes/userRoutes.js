const express = require('express');
const router = express.Router();
const { authUser, registerUser, getUserProfile, getUsers } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/login', authUser);
router.route('/').post(protect, admin, registerUser).get(protect, admin, getUsers);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
