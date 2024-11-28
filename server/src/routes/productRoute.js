const express = require("express")
const { getAllProducts } = require("../controller/productController")
const router = express.Router({ mergeParams: true })

router.get("/", getAllProducts)


module.exports = router