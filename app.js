const express = require('express');
const cors = require('cors');
const  connection  = require('./configrations/config')
const userRouter = require('./modules/users/routes/user.router')
const messageRouter = require('./modules/messages/routes/messages.router')
const app = express()
require('dotenv').config()
const port = process.env.port

connection();

app.use(express.json())
app.use(cors())

app.use(userRouter)
app.use(messageRouter)







app.listen(port , ()=>{
    console.log(`server is running at ${port}`);
})