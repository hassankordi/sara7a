const Joi = require('joi')

module.exports = {
    addUserSchema :{
        body: Joi.object().required().keys({
            name:Joi.string().required() ,
            email:Joi.string().required().email() ,
            phone:Joi.string().required() ,
            password:Joi.string().required() ,
            confirmPassword:Joi.string().required() ,
            age : Joi.number().required() ,
            address : Joi.string().allow('')
        })
    } ,
    loginUserSchema :{
        body: Joi.object().required().keys({
            email:Joi.string().required().email() ,
            password:Joi.string().required() ,
        })
    } ,
    catchUserSchema:{
        params :Joi.object().required().keys({
            id:Joi.string().required()
        })
    }
}