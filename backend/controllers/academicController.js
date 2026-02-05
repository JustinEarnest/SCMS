const { Student, Teacher, Subject } = require('../models/Academic');
const { Attendance: AttendanceModel, Mark: MarkModel } = require('../models/AcademicRecords');

// @desc    Get all subjects
// @route   GET /api/academic/subjects
// @access  Private
const getSubjects = async (req, res) => {
    const subjects = await Subject.find({});
    res.json(subjects);
};

// @desc    Create subject
// @route   POST /api/academic/subjects
// @access  Private/Admin
const createSubject = async (req, res) => {
    const { name, code, department } = req.body;
    const subject = new Subject({ name, code, department });
    const createdSubject = await subject.save();
    res.status(201).json(createdSubject);
};

// @desc    Mark attendance
// @route   POST /api/academic/attendance
// @access  Private/Teacher
const markAttendance = async (req, res) => {
    const { studentId, subjectId, date, status } = req.body;
    const attendance = new AttendanceModel({
        student: studentId,
        subject: subjectId,
        date,
        status,
    });
    const createdAttendance = await attendance.save();
    res.status(201).json(createdAttendance);
};

// @desc    Get attendance for a student
// @route   GET /api/academic/attendance/:studentId
// @access  Private
const getAttendance = async (req, res) => {
    const attendance = await AttendanceModel.find({ student: req.params.studentId })
        .populate('subject', 'name')
        .populate('student', 'name');
    res.json(attendance);
};

// @desc    Add marks
// @route   POST /api/academic/marks
// @access  Private/Teacher
const addMark = async (req, res) => {
    const { studentId, subjectId, examType, score } = req.body;
    const mark = new MarkModel({
        student: studentId,
        subject: subjectId,
        examType,
        score,
    });
    const createdMark = await mark.save();
    res.status(201).json(createdMark);
};

// @desc    Get marks for a student
// @route   GET /api/academic/marks/:studentId
// @access  Private
const getMarks = async (req, res) => {
    const marks = await MarkModel.find({ student: req.params.studentId })
        .populate('subject', 'name');
    res.json(marks);
};

module.exports = {
    getSubjects,
    createSubject,
    markAttendance,
    getAttendance,
    addMark,
    getMarks,
};
