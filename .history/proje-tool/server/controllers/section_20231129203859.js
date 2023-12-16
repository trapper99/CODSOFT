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

/**
 * Update a section by ID.
 * 
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @returns {Promise<void>}
 */
exports.update = async (req, res) => {
    const { sectionId } = req.params;
    try {
        const section = await Section.findByIdAndUpdate(sectionId, req.body, { new: true });
        section._doc.task = [];
        res.status(200).json(section);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

expo