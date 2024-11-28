const express = require("express")
const { getAllBranches } = require("../controller/branchController")
const router = express.Router()

router.get("/", getAllBranches)


module.exports = router