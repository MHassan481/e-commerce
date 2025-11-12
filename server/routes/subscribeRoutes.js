import express from "express";
import { newsletterSubscription } from "../controllers/subscribeController.js";


const routers = express.Router();

routers.route("/").post(newsletterSubscription);

export default routers;