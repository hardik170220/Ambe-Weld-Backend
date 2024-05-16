import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
          required:true,
          type:Boolean,
          default:false
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
    // Additional fields can be added as needed
    // For example: name, age, gender, etc.
}, ); // Adds createdAt and updatedAt timestamps

//hashing password
userSchema.pre("save",async function(next){

   const user = this;
   if(!user.isModified){
    next();
   }

   try {
    const salt = await bcryptjs.genSalt(10);
    const hash_password = await bcryptjs.hash(user.password,salt);
    user.password = hash_password;
   } catch (error) {
    console.log(error)
   }
})



// generate token

 userSchema.methods.generateAuthToken = async function(){
    try {
        
        const token =  jwt.sign({_id:this._id.toString(),username:this.username , email:this.email },process.env.SECRET_KEY,{
            expiresIn:"30d"
        });
        this.tokens = this.tokens.concat({token:token})
        // console.log(token);
        return token ;
        
    } catch (error) {
        console.log(error);
    }
 }


// Create the User model
const User = mongoose.model('User', userSchema);

export default User

