const User = require('../../users/model/user.model');
const Messages = require('../model/messages.model')





const addMessage = async (req , res)=>{
    let {content} = req.body;
    let {id} =req.params ;

    try {
        const user = await User.findOne({_id:id})
        if(user){
            const message = await Messages.insertMany({userId:id , content})
            res.json({msg:`message added success to ${user.name} `})

        }else{
            res.json({msg:`this user is not here`})
        }


        
    } catch (error) {
        res.json({msg: 'error in add message',error})
        
    }
}


const deleteMessage = async (req , res)=>{
    let {id} = req.body;
    

    try {
       const deleteMessage = await Messages.findOne({_id:id})
       if(deleteMessage){
           await Messages.deleteOne({_id:id})
           res.json({msg:'deleted success'})
       }
       else{
        res.json({msg:'this message is not here'})

       }

        
    } catch (error) {
        res.json({msg: 'error in delete message',error})
        
    }
}


module.exports = {
    addMessage ,
    deleteMessage
}