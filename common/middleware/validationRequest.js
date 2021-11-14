module.exports = (Schema)=>{
    return async (req ,res ,next)=>{
        const validationArr = [];

        [('headers', 'params', 'query', 'body' )].forEach((key)=>{
            // console.log(key);
            if(Schema[key]){
                
                // console.log(key ,'after if');
                const validationResult = Schema[key].validate(req[key])
                if(validationResult.error){
                console.log(validationResult.error);

                    validationArr.push(validationResult.error.details[0].message.split('\"').join())
                }
            }
        })
        
        if(validationArr.length){
            res.json({msg:validationArr.join()})
        }
        else{
            // console.log('is valid');
            next();
        }


        

    }
}






