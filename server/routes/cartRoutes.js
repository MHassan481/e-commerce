import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { addToCart, cartDetail, convertAccountGuestToUser, deleteProductFromCart, updateProductQuantity } from "../controllers/cartController.js";

const routers = express.Router();

routers.route("/").post(addToCart);
routers.route("/").put(updateProductQuantity);
routers.route("/").delete(deleteProductFromCart);
routers.route("/").get(cartDetail);
routers.route("/merge").post(protect,convertAccountGuestToUser);

export default routers;
