const Board = require('../models/board');
const Section = require('../models/section');
const Task = require('../models/task');

/**
 * Create a new board.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} The newly created board.
 */
exports.create = async (req, res) => {
    try {
        const boardsCount = await Board.find().count()
        const board = await Board.create({
            user: req.user._id,
            position: boardsCount > 0 ? boardsCount : 0,
            ...req.body
        })
        res.status(201).json(board)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

/**
 * Get all boards for a user.
 * 
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
exports.getAll = async (req, res) => {
    try {
        const boards = await Board.find({ user: req.user._id }).sort('position')
        res.status(200).json(boards)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.updatePosition = async (req, res) => {
    const { boards } = req.body
    try {
        for (const key in boards.reverse()) {
            const board = boards[key]
            await Board.findByIdAndUpdate(
                board.id,
                { $set: { positio}}
            )
        }
    }
} 