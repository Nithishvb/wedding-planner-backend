const express  = require('express');
const app = express();
const mongoose = require('mongoose')
const todoRouter = require('./Router/todoRouter')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/todo',todoRouter);

app.listen(4000, (req,res) => {
    console.log("server started on port 4000");
})

mongoose.connect('mongodb://localhost:27017/todoApp', () => {
    console.log("db connected successfully");
})
