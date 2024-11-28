const express = require("express")
const { getAllCategories } = require("../controller/categoryController")
const ProductRoute = require("./productRoute")

const router = express.Router()


router.get("/", getAllCategories)

// get Product in specific Category
router.use("/:categoryId", ProductRoute)

module.exports = router