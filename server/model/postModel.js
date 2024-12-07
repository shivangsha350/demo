const mongoose = require('mongoose')

const postModelSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String},
    message: {type:String}
})

const postModel = mongoose.model("data", postModelSchema)

module.exports = postModel