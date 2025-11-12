import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { afterPaymentconfirmation, afterPaymentSuccessfully, createCheckout } from "../controllers/checkoutController.js";


const routers = express.Router();

routers.route("/").post(protect,createCheckout);
routers.route("/:id/pay").put(protect,afterPaymentSuccessfully);
routers.route("/:id/finalize").post(protect,afterPaymentconfirmation);

export default routers;