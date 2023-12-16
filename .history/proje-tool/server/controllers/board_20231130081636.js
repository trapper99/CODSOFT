const Board = require('../models/board');
const Section = require('../models/section');
const Task = require('../models/task');

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
+/**
+ * Create a new board.
+ *
+ * @param {Object} req - The request object.
+ * @param {Object} res - The response object.
+ * @return {Object} The newly created board.
+ */
<<<<<  bot-c9874374-443c-46cb-ae10-64424883a4ac  >>>>>
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