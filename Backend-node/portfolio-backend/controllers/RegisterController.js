const User = require('../models/User');

exports.RegistertPost = async (req,res)=>{
    const {username, email, password} = req.body;
    const user = await User.create({
        username,
        email,
        password
    })
    
   return res.status(200).json({
        success: true,
        data: user,
    })
}

exports.getUser = async (req,res)=>{
    const user = await User.find();
    console.log(user)
    return res.status(200).json({
        success:200,
        data: user
    })
}

exports.LoginController = async (req,res)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email,password});
    console.log(user);
    if(user){
        return  res.status(200).json({
            success:true,
            data: "Credential Successful"
        })
    }else{
        return res.status(400).json({
            success:false,
            data: "Credential Fail"
        })
    }
    

    

}