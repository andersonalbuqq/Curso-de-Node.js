const Task = require('../models/Task')

module.exports = class TaskController{
    static createTask(req,res){
        res.rend('task/create')
    }
}