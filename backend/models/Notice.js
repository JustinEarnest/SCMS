const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    targetRole: {
        type: String,
        enum: ['all', 'student', 'teacher'],
        default: 'all',
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Admin or Teacher who posted it
    },
}, { timestamps: true });

const Notice = mongoose.model('Notice', noticeSchema);
module.exports = Notice;
