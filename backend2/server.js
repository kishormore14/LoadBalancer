const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002; // Different port for backend2

// Middleware
app.use(express.json());
app.use(cors());

// API Route
app.get("/api/", (req, res) => {
    setTimeout(() => {
        res.send(`Response from backend2 on port ${PORT}`);
    }, 1000); // Delay response for 1 second (1000 milliseconds)
});

// Start Server
app.listen(PORT, () => console.log(`Backend2 running on port ${PORT}`));
