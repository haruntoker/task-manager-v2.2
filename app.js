const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();



app.use(express.json())
app.use(express.static('./public'))


const tasks = require('./routes/tasks')
app.use('/api/v1/tasks', tasks)






// db & dotenv
dotenv.config()

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

const connect = async() =>{
    try {
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });

        console.log("DB connected succesfully!");
        app.listen(PORT, () =>{
            console.log(`Server running on port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}

connect()
