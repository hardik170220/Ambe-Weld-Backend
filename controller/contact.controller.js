import ContactDetails from "../model/contact.model.js";
import User from "../model/user.model.js";


export const contactForm = async(req,res)=>{
    

    try {
       
        const {email,message} = req.body;
        const existEmail = await User.findOne({email})
        if(existEmail){
        
        const contactFormDetails = new ContactDetails({
            email,
            message
        })
        const contact=  await contactFormDetails.save();
        res.status(200).json({message:"feedback sent successfully",contact,status:200})
        console.log(contact);

    }
    else{
        res.status(400).json({message:"user not exist"})
        console.log("email not exist ")
    }
    } catch (error) {
        console.log(error)
    }
}

export const getcontactForm = async(req,res) =>{

    try {
        
        const feed = await ContactDetails.find();
          
         
        res.status(200).json(feed);

    } catch (error) {
        console.log("Error",error)
        res.status(500).json(error);
    }
}