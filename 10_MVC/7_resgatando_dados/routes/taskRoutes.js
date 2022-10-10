const express = require('express')
const router = express.Router()

const taskController = require('../controllers/TaskControler')

router.get('/add', taskController.createTask)
router.post('/add', taskController.createTaskSave)
router.get('/', taskController.showTasks)

module.exports = router