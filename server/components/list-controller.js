const { Lists } = require('../models/models')

class ListController {
    async add(req, res) {
        let {name} = req.body
        var list = await Lists.create({ name })
        return res.json(list)
    }

    async getAll(req, res) {
        var lists = await Lists.findAll()
        return res.json(lists)
    }
}

module.exports = new ListController()
