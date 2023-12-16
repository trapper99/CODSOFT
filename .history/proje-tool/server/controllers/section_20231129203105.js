const Section = require('../models/section');
const Task = require('../models/task');

exports.create = async (req, res) => {
    const { boardId } = req.params
    try {
        const section = await Section.create({
            title: req.body.title,
            boardId
        });
        res.status(201).json(section);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = 