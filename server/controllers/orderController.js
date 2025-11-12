import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderSchema.js";

const loggedInUserOrders = expressAsyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

const orderDetailById = expressAsyncHandler(async (req, res) => {
  try {
    const order = await Order.findById( req.params.id ).populate(
      "user",
      "name email"
    );
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export { loggedInUserOrders, orderDetailById };
