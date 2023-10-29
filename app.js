const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')


app.use(express.json())




app.use('/api/v1/tasks')





// dotenv & DB set-up

dotenv.config()

const PORT = process.env.PORT || 6000
const MONGO_URI = process.env.MONGO_URI


const connect = async()=>{
    try {
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology : true,
            useNewUrlParser : true,
            useFindAndModify: true
        })

        console.log("DB connected successfully!");
        app.listen(PORT, ()=>{
            console.log(`App listening port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

connect()