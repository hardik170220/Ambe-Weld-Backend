import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:String,
    author:String,
    genre:String,
    year:Number,
    description:String,
    image:String,
    price:String,
    rating:Number
})

const Book = mongoose.model("Book",bookSchema);

export default Book;