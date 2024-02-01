
const JWT = require("jsonwebtoken")
const JWT_SECRET = "Iamdevesh"

const fetchuser = (req,res,next)=>{
    //create header authtoken
    const token = req.header("auth-token")
    
    //if token is wrong or empty then return error
    if (!token)
    {
        return res.status(400).json({Error:"please authenticate using valid auth-token"})
    }

    //find the user by auth-token
    try {
        const data = JWT.verify(token,JWT_SECRET)
        req.user = data.user
        next()    
    } 
    catch (error) {
        res.status(500).json({error:"Some internal error in server"})
    }

}

module.exports = fetchuser
