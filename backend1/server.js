const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001; // Different port for backend1

// Middleware
app.use(express.json());
app.use(cors());

// API Route
app.get("/api/", (req, res) => {
    res.send(`Response from backend1 on port ${PORT}`);
});

// Start Server
app.listen(PORT, () => console.log(`Backend1 running on port ${PORT}`));
