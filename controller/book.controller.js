import Book from "../model/book.model.js";

export  const getBooks = async(req,res)=>{
    try {
        
        const book = await Book.find();
      
            console.log('Cookies: ', req.cookies)
          
         
        res.status(200).json(book);

    } catch (error) {
        console.log("Error",error)
        res.status(500).json(error);
    }
}