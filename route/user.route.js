import express from "express"
import { createUser, currUser, loginUser } from "../controller/user.controller.js";
import validate from "../middleware/validate-middleware.js";
import signupSchema from "../validators/auth-validator.js";
import { authMiddleware } from "../middleware/auth-middleware.js";


const router = express.Router();

const userRoute=  router.post("/signup", validate(signupSchema),createUser);

export default userRoute;

// // Get all users
// router.get('/users', userController.getAllUsers);

// Get a single user by ID
 export const loginRoute =  router.post('/login', loginUser);

// // Update a user by ID
// router.put('/users/:id', userController.updateUserById);

// // Delete a user by ID
// router.delete('/users/:id', userController.deleteUserById);

export const currUserRoute = router.get("/curruser",authMiddleware,currUser)
