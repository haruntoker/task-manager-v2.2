
const {Task} = require('../models/Tasks')


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
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({error})
    }

}


// 3
const getTask = async(req,res) =>{
   try {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        return res.status(404).json({msg:`Task with id:${taskID} not found!`})
    }
    res.status(200).json({task})
   } catch (error) {
    res.status(500).json({error})
   }

}



// 4
const updateTask = async(req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndUpdate({_id:taskID}, req.body, {new:true, runValidators:true})
        if(!task){
            return res.status(400).json({msg:`Task with id:${taskID} is not updated!`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error})
    }
}


// 5
const deleteTask = async(req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findByIdAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({msg:`No task t delete with id:${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error})
    }
}








module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}




