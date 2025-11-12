import express from "express";
import { loggedInUserOrders, orderDetailById } from "../controllers/orderController.js";
import {protect} from "../middleware/authMiddleware.js";


const routers = express.Router();

routers.route("/my-orders").get(protect,loggedInUserOrders);
routers.route("/:id").get(protect,orderDetailById);

export default routers;