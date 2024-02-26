

const mongoose = require('mongoose');

const userSchema = mongoose.Schema(

    {
        username:{
            type:String,
            required:[true, "Please enter a username"],
        },
        email:{
            type:String,
            unique:[true, "Please enter a email"],
        },
        password:{
            type:String,
            requires:[true,"Please enter a password"],
        },

    },
    {
        timestamps: true
    }

);


module.exports = mongoose.model("User", userSchema);