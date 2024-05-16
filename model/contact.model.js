import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        
    },
    message:{
        type: String,
        required: true,
    }
});

const ContactDetails = mongoose.model("ContactDetails",contactSchema);

export default ContactDetails;