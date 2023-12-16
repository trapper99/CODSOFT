const Task = require('../models/task')
const Section = require('../models/section')

exports.create = async (req, res) => {
    const {sectionId} = req.body
    try {
        const tasks
        const task = await Task.create(req.body)
        const section = await Section.findById(sectionId)
        section.task.push(task._id)
        await section.save()
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}