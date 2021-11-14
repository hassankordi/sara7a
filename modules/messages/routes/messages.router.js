const messageRouter = require('express').Router()
const validationRequest = require('../../../common/middleware/validationRequest')
const { addMessageSchema ,deleteMessageSchema} = require('../validations/messageValidation')
const {addMessage, deleteMessage, getMessages} = require('../controllers/messages.controllers')


messageRouter.post('/sendMessage/:id' , validationRequest(addMessageSchema) , addMessage)

messageRouter.post('/deleteMessage' , validationRequest(deleteMessageSchema) , deleteMessage)

messageRouter.get('/getMessages/:id' , getMessages)








module.exports = messageRouter