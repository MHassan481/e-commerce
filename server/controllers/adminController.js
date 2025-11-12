import expressAsyncHandler from "express-async-handler";
import User from "../models/userSchema.js";

const getAllUsers = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

const addNewUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email is already Subscribed" });
    }
    user = new User({
      name,
      email,
      password,
      role: role || "customer",
    });

    await user.save();
    return res.status(201).json({ message: "User create successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

const updateUserInfo = expressAsyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;
    }
    const updateUser = await user.save();
    res.json({ message: "User updated successfully", user, updateUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

const deleteUser = expressAsyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.deleteOne()
      res.json({message:"User deleted successfully"})
    } else {
        res.status(404).json({message:"User not found"})
    }
    const updateUser = await user.save();
    res.json({ message: "User updated successfully", user, updateUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

export { getAllUsers, addNewUser, updateUserInfo, deleteUser };
