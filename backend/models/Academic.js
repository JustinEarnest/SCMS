const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    rollNum: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true, // simplified for MVP, could be a ref
    },
    // Add other fields as necessary (DOB, address, etc)
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

const teacherSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    department: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: String,
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        // Optional, as a subject might not be assigned immediately
    },
}, { timestamps: true });

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = { Student, Teacher, Subject };
