const {Tasks} = require('../models/models')

class TaskController {
    async add(req, res) {
        let {listId, text} = req.body
        var task = await Tasks.create({text, listId})
        return res.json(task)
    }

    async getAll(req, res) {
        var tasks = await Tasks.findAll()
        return res.json(tasks)
    }

    async update(req, res) {
        let {taskId, text, completed} = req.body
        await Tasks.update({ text, completed }, { where: { 'id': taskId } })
        return res.json({ "ok": true })
    }
}

module.exports = new TaskController()
