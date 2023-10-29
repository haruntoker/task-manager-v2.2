const mongoose = require('mongoose')


//schema 1
const TaskSchema = new mongoose.Schema({
    name:{ 
    type: String,
    required: [true, 'must provide name'],
    trim:true,
    maxlength:[20, 'max 20 charachters'],
    },

    completed: {
        type: Boolean,
        default: false 
    }
})





//export to "controllers" file
const Task = mongoose.model('Task', TaskSchema)
// const User = mongoose.model('User', UserSchema)

module.exports = {Task}

