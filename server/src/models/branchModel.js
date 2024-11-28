const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Branch Name is required"],
            minLength: [4, "Branch Name must be more than 4 characters"],
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

const Branch = mongoose.model("Branch", branchSchema);



module.exports = Branch