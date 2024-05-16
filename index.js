import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import bookRoute from "./route/book.route.js"
import userRoute, { currUserRoute, loginRoute } from "./route/user.route.js";
import { connectDb } from "./utils/db.js";
import errorMiddleware from "./middleware/error-middleware.js";
import contactRoute, { getcontactRoute } from "./route/contact.route.js";
import {adminRoute,  deleteaAdminRoute, getAdminRoute, updateAdminRoute}  from "./route/admin.route.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())



dotenv.config();
const port = process.env.PORT || 4001 




//connect to mongodb
// try {
    
//      mongoose.connect(URI,{
//         dbName:"BookStore"
//      });
//      console.log("connected to mongodb");
// } catch (error) {
    
//     console.log("Error:", error)
// }
connectDb().then(()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
});

//defining rotes
app.use("/book",bookRoute)
app.use("/user",userRoute)
app.use("/user",loginRoute)
app.use("/contact",contactRoute)
app.use("/admin",getcontactRoute)
app.use("/",currUserRoute);
app.use("/admin",adminRoute);
app.use("/admin",updateAdminRoute);
// app.use("/admin",deleteaAdminRoute);
// app.use("/admin",getAdminRoute);


app.use(errorMiddleware);

