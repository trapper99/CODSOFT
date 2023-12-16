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
        task._doc.section = section
        section.task.push(task._id)
        await section.save()
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.update = async (req, res) => {
    const {taskId} = req.params
    try {
        const task = await Task.findByIdAndUpdate(taskId, req.body, {new: true})
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.delete = async (req, res) => {
    const { taskId } = req.params
    try {
        const currentTask = await Task.findById(taskId)
        await Task.deleteOne({ _id: taskId})
    }
}