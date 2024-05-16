import Book from "../model/book.model.js";
import User from "../model/user.model.js"

export const adminPanel = async (req , res ) =>{
    try {
        const users = await User.find();
        res.status(200).json({message:"users found suceessfully",users})

       
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"users not fetched"});
    }
}

//delete user by admin

export const deleteUserById = async(req ,res, next) =>{
    try {
      const userId = req.params.userId;
      await User.deleteOne({_id:userId});
     
      return res.status(200).json({message:"User Deleted Sucessfully"})
    } catch (error) {
      console.log(error)
      next(error);
    }
}

export const getUserById = async(req ,res, next) =>{
    try {
      const userId = req.params.userId;
      const data = await User.findOne({_id:userId});
      console.log(data)
      return res.status(200).json(data)
    } catch (error) {
      console.log(error)
      next(error);
    }
 }



 //update logic
 export const updateUserById = async(req , res,next) =>{
  try {
    const userId = req.params.userId ;
    const updatedUserData = req.body ;

    
  
    const updatedData = await User.updateOne(
      { _id: userId }, // Filter: Find the user by their ID
      { $set: updatedUserData } // Update: Set the updatedUserData
  );
    
    
  console.log(updatedUserData)
    return res.status(200).json(updatedData);
   
  } catch (error) {
    next(error)
  }
 }


 //Add book by Admin
 export const addBookByAdmin = async(req,res,next) =>{
  try {
       
    const {title,author,genre,year,description,image,price,rating} = req.body;
  
    
    const bookDetails = new Book({
      title,author,genre,year,description,image,price,rating
    })
    const book=  await bookDetails.save();
    res.status(200).json({message:"Book added successfully",book,status:200})
    console.log(book);



} catch (error) {
    console.log(error)
}

 }