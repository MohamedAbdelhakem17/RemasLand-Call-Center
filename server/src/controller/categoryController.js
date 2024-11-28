const asyncHandler = require("express-async-handler")
const CategoryModel = require("../models/categoryModel")


exports.getAllCategories = asyncHandler(async (req, res) => {
    const categories = await CategoryModel.find({})
    res.status(200).json({ status: "success", data: categories })
})