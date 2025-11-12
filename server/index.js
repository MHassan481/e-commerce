import express from "express";
import connectToDatabase from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connectToDatabase();

app.use(express.json());
app.use(
  cors({
    origin: "https://e-commerce-14wa.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Wellcom to E-Commerce!");
});

import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);
import productRoutes from "./routes/productRoutes.js";
app.use("/api/products", productRoutes);
import cartRoutes from "./routes/cartRoutes.js";
app.use("/api/cart", cartRoutes);
import checkoutRoutes from "./routes/checkoutRoutes.js";
app.use("/api/checkout", checkoutRoutes);
import orderRoutes from "./routes/orderRoutes.js";
app.use("/api/orders", orderRoutes);
import subscribeRoutes from "./routes/subscribeRoutes.js";
app.use("/api/subscribe", subscribeRoutes);

//Admin
import adminRoutes from "./routes/adminRoutes.js";
app.use("/api/admin", adminRoutes);

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
