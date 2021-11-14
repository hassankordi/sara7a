const mongoose = require("mongoose")
const messagesSchema = require("../schema/messages.schema")


const Messages = mongoose.model('message' , messagesSchema)


module.exports = Messages;