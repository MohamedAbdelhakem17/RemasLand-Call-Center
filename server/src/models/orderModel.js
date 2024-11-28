const mongoose = require("mongoose");

// Define the order schema
const orderSchema = new mongoose.Schema(
    {
        user_name: {
            type: String,
            required: [true, "User Name is required"],
        },

        branch: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Branch",
            required: [true, "Branch is required"],
        },

        address: {
            type: String,
            required: [true, "Address is required"],
        },

        phone: {
            type: String,
            required: [true, "Phone is required"],
        },

        distinctive_mark: String,

        total_price: {
            type: Number,
            required: [true, "Total Price is required"],
            min: [0, "Total Price must be a positive value"],
        },

        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: [true, "Product reference is required"],
                },
                product_price: {
                    type: Number,
                    required: [true, "Product Price is required"],
                    min: [0, "Product Price must be a positive value"],
                },
                product_quantity: {
                    type: Number,
                    required: [true, "Product Quantity is required"],
                },
            },
        ],
    },
    { timestamps: true }
);



// Optional: Add indexing to optimize queries on frequently queried fields
orderSchema.index({ user_name: 1, branch: 1 });
orderSchema.index({ total_price: -1 }); // For sorting orders by price, descending


orderSchema.pre(/^find/, function (next) {
    this
        .populate({ path: "branch", select: "name" })
        .populate({ path: "items.product", select: "name" })
    next()
})
// Create and export the model
module.exports = mongoose.model("Order", orderSchema);
