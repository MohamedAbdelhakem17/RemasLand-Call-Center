const asyncHandler = require("express-async-handler")
const BranchModel = require("../models/branchModel")


exports.getAllBranches = asyncHandler(async (req, res) => {
    const branches = await BranchModel.find({})
    res.status(200).json({ status: "success", data: branches })
})