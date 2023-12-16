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

/**
 * Updates the position of boards in the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves to the updated boards.
 */
exports.updatePosition = async (req, res) => {
    const { boards } = req.body
    try {
        for (const key in boards.reverse()) {
            const board = boards[key]
            await Board.findByIdAndUpdate(
                board.id,
                { $set: { position: key }}
            )
        }
        res.status(200).json(boards)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

/**
 * Retrieves a single board and its associated sections and tasks.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} The board object with its sections and tasks.
 */
exports.getOne = async (req, res) => {
    const {boardId} = req.params
    try {
        const board = await Board.findOne({ user: req.user._id, _id: boardId })
        if (!board) {
            return res.status(404).json({ error: 'Board not found' })
        }
        const sections = await Section.find({ board: boardId }).sort('position')
        for (const section of sections) {
            const tasks = await Task.find({ section: section.id }).populate('section').sort('position')
            section._doc.tasks = tasks
        }
        board._doc.sections = sections
        res.status(200).json(board)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.update = async (req, res) => {
    const { boardId } = req.params
    const { title, description, favourite } = req.body
    
    try {
        if (title === '') req.body.title = 'untitled'
        if (description === '') req.body.description = 'Add description here'
        const currentBoard = await Board.findById(boardId)
        if (!currentBoard) return res.status(404).json('Board not found')

        if (favourite !== undefined && currentBoard.favourite !== favourite) {
            const favourites = await Board.find({
                user: currentBoard.user,
                favourite: true,
                _id: { $ne: boardId }
            }).sort('')
        }
    }
}