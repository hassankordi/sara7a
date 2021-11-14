const express = require('express');
const cors = require('cors');
const  connection  = require('./configrations/config')
const userRouter = require('./modules/users/routes/user.router')
const messageRouter = require('./modules/messages/routes/messages.router')
const app = express()
require('dotenv').config()
const port = process.env.port || 3000

connection();

app.use(express.json())
app.use(cors())

app.use(userRouter)
app.use(messageRouter)

app.get('/hello',(req , res)=>{
    res.json({msg:'hello in my sara7a app'})
})

// "engines": {
//     "node": "v14.17.0" ,
//     "npm":"6.14.13"
//     },





app.listen(port || 5000, ()=>{
    console.log(`server is running at ${port}`);
})