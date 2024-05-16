import jwt from "jsonwebtoken"
import User from "../model/user.model.js";


export const authMiddleware = async(req,res,next) =>{
  // console.log("my header",req.headers)
  const token = await req.header("Authorization");
 
  console.log(token)
  if(!token){
    return res.status(401).json({message:"Unauthorised HTTP , Token not provided"});
  }

  console.log("token from auth middleware",token);

 const jwtToken = token.replace("Bearer","").trim();


 try {
     const isVerified = jwt.verify(jwtToken,process.env.SECRET_KEY);
     console.log(isVerified);

     const userData = await User.findOne({email:isVerified.email}).select({
        password:0
     });
   //   console.log(userData);
     req.user = userData;
     req.token = token;


    next();
    
 } catch (error) {
    console.log(error);
    return res.status(401).json({message:"Unauthorized Invalid token"});
 }


  
}