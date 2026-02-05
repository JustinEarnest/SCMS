const Notice = require('../models/Notice');

// @desc    Get all notices
// @route   GET /api/notices
// @access  Private
const getNotices = async (req, res) => {
    let query = {};
    if (req.user.role !== 'admin') {
        query = { $or: [{ targetRole: 'all' }, { targetRole: req.user.role }] };
    }

    const notices = await Notice.find(query).sort({ createdAt: -1 });
    res.json(notices);
};

// @desc    Create a notice
// @route   POST /api/notices
// @access  Private/Admin/Teacher
const createNotice = async (req, res) => {
    const { title, content, targetRole } = req.body;

    const notice = new Notice({
        title,
        content,
        targetRole,
        postedBy: req.user._id,
    });

    const createdNotice = await notice.save();
    res.status(201).json(createdNotice);
};

module.exports = { getNotices, createNotice };
