import User from "../model/user.model.js";

export const adminMiddleware = (req,res,next) =>{

   try {
    const adminRole = req.user.isAdmin;
    if(!adminRole){
     return res.status(403).json({message:"Access Denied. User is not Admin"})
    }
    
    next();
   } catch (error) {
    console.log(error)
   }


}




