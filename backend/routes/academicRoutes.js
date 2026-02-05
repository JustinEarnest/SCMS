const express = require('express');
const router = express.Router();
const {
    getSubjects,
    createSubject,
    markAttendance,
    getAttendance,
    addMark,
    getMarks,
} = require('../controllers/academicController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/subjects').get(protect, getSubjects).post(protect, admin, createSubject);
router.route('/attendance').post(protect, markAttendance);
router.route('/attendance/:studentId').get(protect, getAttendance);
router.route('/marks').post(protect, addMark);
router.route('/marks/:studentId').get(protect, getMarks);

module.exports = router;
