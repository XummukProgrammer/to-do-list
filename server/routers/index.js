const express = require('express')
const lists_router = require('./lists-router')
const tasks_router = require('./tasks-router')

const router = express.Router()

router.use('/lists', lists_router)
router.use('/tasks', tasks_router)

module.exports = router
