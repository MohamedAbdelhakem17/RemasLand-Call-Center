const BranchRoute = require("./branchRoute")
const CategoryRoute = require("./categoryRoute")
const ProductRoute = require("./productRoute")
const OrderRoute = require("./orderRoute")

module.exports = RoutesAmount = (app) => {
    app.use("/api/v1/branch", BranchRoute)
    app.use("/api/v1/category", CategoryRoute)
    app.use("/api/v1/product", ProductRoute)
    app.use("/api/v1/order", OrderRoute)
}