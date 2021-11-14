const Joi = require('joi');


module.exports ={
    addMessageSchema:{
        body:Joi.object().required().keys({
            content:Joi.string().required()
        }) ,
        params:Joi.object().required().keys({
            userId:Joi.string().required()
        })
    },
    deleteMessageSchema:{
        body:Joi.object().required().keys({
            id:Joi.string().required()
        })
    }

}