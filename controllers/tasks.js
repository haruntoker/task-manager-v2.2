
const Task = require('../models/Tasks')


// getAllTasks,
// createTask,
// getTask,
// updateTask,
// deleteTask}

// 1
const getAllTasks = async(req,res) =>{
    try {
        const tasks = await Task.find({})
        if(!tasks){
            return res.status(404).json({msg:`Tasks not found! `})
        }
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({error})
    }
}

// 2
const createTask = async(req,res) =>{
    try {
        const task = await Task.create(req.body)
        if(!task){
            return res.status(404).json({msg:'task not created'})
        }
        res.status(201).json({msg: `Task has been created ${task}`})
    } catch (error) {
        res.status(500).json({error})
    }

}
















module.exports = {getAllTasks, createTask}




