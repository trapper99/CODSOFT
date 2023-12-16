const Task = require('../models/task')
const Section = require('../models/section')

/**
 * Creates a new task.
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @return {object} The newly created task.
 */
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

/**
 * Updates a task by its ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} - The updated task.
 */
exports.update = async (req, res) => {
    const {taskId} = req.params
    try {
        const task = await Task.findByIdAndUpdate(taskId, req.body, {new: true})
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

/**
 * Deletes a task from the database.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} The response object containing a JSON message.
 */
exports.delete = async (req, res) => {
    const { taskId } = req.params
    try {
        const currentTask = await Task.findById(taskId)
        await Task.deleteOne({ _id: taskId })
        const tasks = await Task.find({section: currentTask.section}).sort('position')
        for (const key in tasks) {
            await Task.findByIdAndUpdate(tasks[key]._id, {position: parseInt(key)})
        }
        res.status(200).json({message: 'Task deleted successfully'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

/**
 * Updates the position of resources and destinations based on the given request body.
 *
 * @param {Object} req - The request object containing the request body.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves to nothing.
 */
exports.updatePosition = async (req, res) => {
    const {
        resourceList,
        destinationList,
        resourceSectionId,
        destinationSectionId
    } = req.body
    const resourceListReverse = resourceList.reverse()
    const destinationListReverse = destinationList.reverse()
    try {
        if (resourceSectionId === destinationSectionId) {
            for (const key in resourceList) {
                await Task.findByIdAndUpdate(resourceList[key]._id, {position: parseInt(key)})
            }
            for (const key in destinationList) {
                await Task.findByIdAndUpdate(destinationList[key]._id, {position: parseInt(key)})
            }
        } else {
            for (const key in resourceListReverse) {
                await Task.findByIdAndUpdate(resourceListReverse[key]._id, {section: destinationSectionId})
            }
            for (const key in destinationListReverse) {
                await Task.findByIdAndUpdate(destinationListReverse[key]._id, {section: resourceSectionId})
            }
        }
        res.status(200).json({message: 'Task position updated successfully'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }import Task from '../models/task';
    import Section from '../models/section';
    
    /**
     * Creates a new task.
     *
     * @param {object} req - The request object.
     * @param {object} res - The response object.
     * @return {object} The newly created task.
     */
    export const create = async (req, res) => {
      // your code here
    };    
}