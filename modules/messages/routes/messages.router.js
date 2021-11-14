const messageRouter = require('express').Router()
const validationRequest = require('../../../common/middleware/validationRequest')
const { addMessageSchema ,deleteMessageSchema} = require('../validations/messageValidation')
const {addMessage, deleteMessage} = require('../controllers/messages.controllers')


messageRouter.post('/sendMessage/:id' , validationRequest(addMessageSchema) , addMessage)

messageRouter.post('/deleteMessage' , validationRequest(deleteMessageSchema) , deleteMessage)








module.exports = messageRouter