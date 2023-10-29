const {mongoose} = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'You must provide name'],
        trim:true,
        maxlength: [20, 'Max charachter exided!'],
    },
    complited:{
        type: Boolean,
        default: false
    }
})




const Task = mongoose.model('Task',TaskSchema)

module.exports = {Task}