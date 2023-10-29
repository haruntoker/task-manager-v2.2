const {task} = require('../models/Tasks')


// getAllTasks,
// createTask,
// getTask,
// updateTask,
// deleteTask}

const getAllTasks = async(req,res) =>{
    try {
        const tasks = await Task.find({})
        if(!tasks){
            return res.status(404).json({msg:`Tasks not found! `})
        }
    } catch (error) {
        
    }
}