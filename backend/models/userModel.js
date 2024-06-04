const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    post  : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    isMarried : {
        type : Boolean,
        required : true
    },
},
{timestamps : true}
)


module.exports = mongoose.model('User', userSchema)