const express = require('express')
const list_controller = require('../components/list-controller')

const router = express.Router()

router.post('/add', list_controller.add)
router.get('/get_all', list_controller.getAll)

module.exports = router
