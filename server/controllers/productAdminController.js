import expressAsyncHandler from "express-async-handler";
import Product from "../models/productSchema.js";



const allProducts = expressAsyncHandler(async (req,res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (error) {
        console.error(error)
        res.status(500).json({message:"Server Error"})
    }
})


export {allProducts}