const express = require('express')
const task_controller = require('../components/task-controller')

const router = express.Router()

router.post('/add', task_controller.add)
router.get('/get_all', task_controller.getAll)
router.put('/update', task_controller.update)

module.exports = router
