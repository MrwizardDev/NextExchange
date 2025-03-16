// server.js - Entry point for backend

const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const { setupWebSockets } = require('./src/websockets/websocketServer');

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json());
app.use(cors());

// Import Routes
const authRoutes = require('./src/routes/authRoutes');
const tradeRoutes = require('./src/routes/tradeRoutes');
const walletRoutes = require('./src/routes/walletRoutes');

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/trade', tradeRoutes);
app.use('/api/user', walletRoutes);

// WebSocket Setup
setupWebSockets(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
