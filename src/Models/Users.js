const { Schema, model, models} = require("mongoose");

const Users = new Schema ({
    name:{
        type: String,
        trim: true,
        maxlength: [200]
    },lastname:{
        type: String,
        trim: true,
        maxlength: [200]
    }
    ,email:{
        type: String,
        trim: true,
        maxlength: [100]
    },password:{
        type: String,
        trim: true,
        maxlength: [15]
    },userStatus:{
        type: String,
        trim: true
    }
})

module.exports = models.UserSchema || model("Users",Users)