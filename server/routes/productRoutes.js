import express from "express";
import {
  addProduct,
  deleteProduct,
  filterProducts,
  bestSeller,
  similarProduct,
  singleProductDetail,
  updateProduct,
  newArrivals,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const routers = express.Router();

routers.route("/").post(protect, admin, addProduct);
routers.route("/:id").put(protect, admin, updateProduct);
routers.route("/:id").delete(protect, admin, deleteProduct);
routers.route("/").get(filterProducts);
routers.route("/best-seller").get(bestSeller);
routers.route("/new-arrivals").get(newArrivals);
routers.route("/:id").get(singleProductDetail);
routers.route("/similar/:id").get(similarProduct);

export default routers;
