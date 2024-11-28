const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Category Name is required"],
            minLength: [4, "Category Name must be more than 4 characters"],
            unique: true,
            trim: true,
        },
        slug: {
            type: String,
            lowercase: true,
        },
        code: {
            type: String,
            required: [true, "Branch Code is required"],
            unique: true,
        },
    },
    { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);



module.exports = Category