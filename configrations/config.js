const mongoose = require('mongoose')


const connection = ()=>{
    return  mongoose.connect( process.env.CONNECTION_STRING_ATLAS).then(()=>{
        console.log('db connected');
    }).catch((err)=>{
        console.log(err);
        connection(); 
    
    });
    
       
    }
module.exports = connection