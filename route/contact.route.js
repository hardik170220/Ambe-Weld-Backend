import e from "express";
import { contactForm, getcontactForm } from "../controller/contact.controller.js";
import validate from "../middleware/validate-middleware.js";
import  { contactSchema } from "../validators/auth-validator.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";

const router = e.Router();

const contactRoute=  router.post("/",validate(contactSchema) , contactForm);
export const getcontactRoute=  router.get("/contacts",authMiddleware,adminMiddleware, getcontactForm);

export default contactRoute;
