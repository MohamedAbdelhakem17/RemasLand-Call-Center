const asyncHandler = require("express-async-handler")
const ProductModel = require("../models/productModel")



exports.getAllProducts = asyncHandler(async (req, res) => {
    const category = req.params.categoryId ? { category: req.params.categoryId } : {}
    const products = await ProductModel.find(category)
    res.status(200).json({ status: "success", data: products })
})