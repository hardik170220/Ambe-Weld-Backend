import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    material:String,
    design:String,
    brand:String,
    usage:String,
    openStyle:String,
    color:String,
    image:String,
    price:String,
    rating:Number
})

const Book = mongoose.model("Catalogue",bookSchema);

export default Book;