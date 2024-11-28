const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product Name is required"],
            minLength: [4, "Product Name must be more than 4 characters"],
            unique: true,
            trim: true,
        },
        price: {
            type: Number,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Branch Code is required"],
            ref: "Category",
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);



module.exports = Product