const asyncHandler = require("express-async-handler")
const Product = require("../models/productModel")
const orderModel = require("../models/orderModel")

const calcTotalPrice = (products) => {
    const total = products.reduce((total, current) => {
        return total + Number(current.product_price);
    }, 0);

    return Number(total.toFixed(2)); 
}

exports.createOrder = asyncHandler(async (req, res) => {
    const { items } = req.body;

    const orderProducts = await Promise.all(items.map(async (item) => {
        const product = await Product.findById(item.product);
        if (!product) {
            throw new Error(`Product not found: ${item.product}`);
        }

        const productPrice = Number(product.price);
        const productQuantity = Number(item.product_quantity);

        const productPriceFinal = Number((productPrice * productQuantity).toFixed(2));

        return {
            ...item,
            product_price: productPriceFinal  
        };
    }));

    const total_price = calcTotalPrice(orderProducts); 

    // Create the order
    const order = await orderModel.create({
        ...req.body,
        items: orderProducts,
        total_price
    });

    res.status(201).json({ status: "success", data: order });
});



exports.getOrders = asyncHandler(async (req, res) => {
    const orders = await orderModel.find({})
    res.status(200).json({ status: "success", data: orders })
})