import express from "express";
import { userRegister, userLogin, userProfile } from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js";

const routers = express.Router();

routers.route("/register").post(userRegister);
routers.route("/login").post(userLogin);
routers.route("/profile").get(protect,userProfile);

export default routers;
