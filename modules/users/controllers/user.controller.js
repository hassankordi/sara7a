const User = require('../model/user.model')
const bcrypt = require('bcrypt');
const Messages = require('../../messages/model/messages.model');
const jwt = require('jsonwebtoken')
const regestration = async (req, res) => {
    let { name, email, password, confirmPassword, age, address, phone } = req.body
    // console.log(name, email, password, confirmPassword, age, address, phone);
    try {
        const user = await User.findOne({ email })
        if (user) {
            res.json({ msg: 'this email already exists try another one' })
        }
        else {
            if (password === confirmPassword) {
                // logic
                const newUser = User({ name, email, password, age, address, phone })
                await newUser.save()
                res.json({ newUser, msg: 'created success' })
            }
            else {
                res.json({ msg: 'Both password should match' })

            }

        }

    } catch (error) {
        res.json({ msg: 'error', error })
    }

}

const login = async (req, res) => {

    let { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (user) {

            const match = await bcrypt.compare(password, user.password)
            if (match) {
                const allMessages = await Messages.find({ userId: user._id })
                // handel if there is no messages
               
                const userToken =  jwt.sign({user}, process.env.SECRET_KEY, { expiresIn: '1d' })
                const messagesToken = jwt.sign({allMessages}, process.env.SECRET_KEY, { expiresIn: '1d' })
                // console.log(userToken);
                // console.log(messagesToken);
                res.json({ msg: `login success`, userToken, messagesToken })

            }
            else {
                res.json({ msg: 'wrogn password ya pro' })

            }
        } else {
            res.json({ msg: 'this email is not here' })
        }

    } catch (error) {
        res.json({ msg: 'error', error })
    }
}

const catchUser =async (req, res) => {
let {id} = req.body;

  try {
      const user = await User.findOne({_id:id});
      if(user){
          res.json({msg:'success' , user})
      }
      else{
          res.json({msg:'invalid-user'})
      }
      
  } catch (error) {
    res.json({msg:'error' , error})
      
  }
}
module.exports = {
    regestration,
    login ,
    catchUser
}