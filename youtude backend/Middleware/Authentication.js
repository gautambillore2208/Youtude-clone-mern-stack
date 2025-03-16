const jwt = require('jsonwebtoken');
const User = require('../Modales/user');


const auth =  async (req,res, next)=>{
    const token = req.cookies.token
    if(!token){
        return  res.status(400).json({message:"no token authorization denied"})
    }else{
        try {
            
          const decode = jwt.verify(token,"Its_My_Secret_Key");
          req.user = await User.findById(decode.userId).select('-password');
          next()



        } catch (error) {
            res.status(401).json({error:"token is not valid"})
        }
    }
}

module.exports = auth