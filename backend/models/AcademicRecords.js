const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Student',
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Subject',
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        required: true,
    },
}, { timestamps: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);

const markSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Student',
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Subject',
    },
    examType: {
        type: String, // e.g., "Midterm", "Final", "Internal"
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    maxScore: {
        type: Number,
        required: true,
        default: 100,
    },
}, { timestamps: true });

const Mark = mongoose.model('Mark', markSchema);

module.exports = { Attendance, Mark };
