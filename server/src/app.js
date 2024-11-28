require("dotenv").config({ path: ".env" });
const cors = require("cors")
const DatabaseConnection = require("./config/dbConnection")
const RoutesAmount = require("./routes")
const express = require("express");

const app = express();
app.use(cors())
app.use(express.json());


// Database Connect 
DatabaseConnection()

// amount Route 
RoutesAmount(app)

// Define a test route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Start the server
const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    server.close(() => {
        console.log("Shutting down server...");
        process.exit(1);
    });
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    server.close(() => {
        console.log("Shutting down server...");
        process.exit(1);
    });
});
