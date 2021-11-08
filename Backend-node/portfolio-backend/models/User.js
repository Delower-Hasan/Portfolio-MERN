const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true

    },
    password:{
        type: String,
        required:true,
    }

},
{
    timestamps:{
        type:String,
        required:true
    }
})

const User = model('User',userSchema)
module.exports = User;