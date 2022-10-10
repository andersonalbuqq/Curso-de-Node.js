const express = require('express')
const TaskController = require('../controllers/TaskControler')
const router = express.Router()

const taskController = require('../controllers/TaskControler')

router.get('/add', taskController.createTask)
router.post('/add', taskController.createTaskSave)
router.post('/remove', taskController.removeTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit', taskController.updateTaskPost)
router.get('/', taskController.showTasks)

module.exports = router