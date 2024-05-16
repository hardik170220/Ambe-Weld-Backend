import User from "../model/user.model.js";
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"

export const createUser = async (req, res) => {
    try {
        const {username,email,password} = req.body;
       const user = await User.findOne({email})
       if(user){
        res.status(400).json({message:"User Already Exits"});
       }

       else{
      
       const createdUser = new User({
        username,
        email, 
        password
       })

    //    const token = jwt.sign({
    //     username,
    //     password
    //    },'shhhhh')

         const token = createdUser.generateAuthToken();
        
       
      const registeredUser=  await createdUser.save();
      console.log(registeredUser);
        res.status(200).send("successfully registered");
     
       }
       
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    // console.log("this is my response",res.cookies)
    const {email,password} = req.body;
    try {
        const user = await User.findOne({
            email:email
        });
 
        
        // console.log("Login token is" ,token)
        // console.log("Login user is ", user)
      
        const matched = bcryptjs.compareSync(password,user.password)
     if(!user || !matched ){
        res.status(300).json("invalid credential");

     }
     
     else{
        const token =await user.generateAuthToken();
        // console.log(token)
        res.cookie('jwt', token, { httpOnly: true,  expires: new Date(Date.now()+ 500000) });
        res.status(200).json({
            message:"login successfully..",
            token,
            user
        });

     }
        
    } catch (error) {
        
        res.status(500).json({ message: "internal server error" });
    }
};

export const currUser = async (req,res) =>{
    try {
        const currUserData = req.user;
        console.log(currUserData);
      res.status(200).json({msg:currUserData});
        
    } catch (error) {
        console.log("error from curruser Route" , error)
        
    }
}