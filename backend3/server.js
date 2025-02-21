const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3003; // Different port for backend3

// Middleware
app.use(express.json());
app.use(cors());

// API Route
app.get("/api/", (req, res) => {
    res.send(`Response from backend3 on port ${PORT}`);
});

// Start Server
app.listen(PORT, () => console.log(`Backend3 running on port ${PORT}`));
