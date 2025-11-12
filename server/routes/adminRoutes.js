import express from "express";
import {protect, admin} from "../middleware/authMiddleware.js";
import { addNewUser, deleteUser, getAllUsers, updateUserInfo } from "../controllers/adminController.js";
import { allProducts } from "../controllers/productAdminController.js";
import { allOrders, deletingOrder, updateOrderStatus } from "../controllers/orderAdminController.js";


const routers = express.Router();

routers.route("/users").get(protect, admin, getAllUsers);
routers.route("/users").post(protect, admin,addNewUser);
routers.route("/users/:id").put(protect, admin,updateUserInfo);
routers.route("/users/:id").delete(protect, admin,deleteUser);
routers.route("/products").get(protect, admin, allProducts);
routers.route("/orders").get(protect, admin, allOrders);
routers.route("/orders/:id").put(protect, admin, updateOrderStatus);
routers.route("/orders/:id").delete(protect, admin, deletingOrder);

export default routers;