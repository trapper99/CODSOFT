const Task = require('../models/task')
const Section = require('../models/section')

exports.create = async (req, res) => {
    const {sectionId} = req.body
    try {
        const tasksCount = await Task.countDocuments({section: sectionId})
        req.body.order = tasksCount
        const task = await Task.create({
            section: sectionId,
            position: tasksCount > 0 ? tasksCount : 0,
            ...req.body
        })
        const section = await Section.findById(sectionId)
        section
        section.task.push(task._id)
        await section.save()
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}