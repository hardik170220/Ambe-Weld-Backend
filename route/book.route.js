import express from "express"
import { getBooks } from "../controller/book.controller.js";


const router = express.Router();

const bookRoute=  router.get("/",getBooks);



export default bookRoute;