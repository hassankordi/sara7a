const userRouter = require('express').Router()
const validationRequest = require('../../../common/middleware/validationRequest')
const {addUserSchema, loginUserSchema ,catchUserSchema } = require('../validation/userValidation')
const {regestration, login, catchUser} = require('../controllers/user.controller')


userRouter.post('/regestration' , validationRequest(addUserSchema) ,regestration )

userRouter.post('/login' , validationRequest(loginUserSchema) ,login )

userRouter.post('/catchUser' , validationRequest(catchUserSchema) ,catchUser )









module.exports = userRouter