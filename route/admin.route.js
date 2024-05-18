import express from "express";
import { adminPanel, deleteUserById ,  getUserById, updateUserById , addBookByAdmin} from "../controller/admin.controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";

const router = express.Router();

export const adminRoute = router.get("/users",authMiddleware,adminMiddleware, adminPanel);
export const deleteaAdminRoute = router.delete("/users/delete/:userId",authMiddleware,adminMiddleware, deleteUserById);
export const getAdminRoute = router.get("/users/:userId",authMiddleware,adminMiddleware, getUserById);
export const updateAdminRoute = router.patch("/users/update/:userId",authMiddleware,adminMiddleware, updateUserById);
export const addBookAdminRoute = router.post("/addbook",addBookByAdmin)
