const express = require('express');
const WebSocket = require('ws');

// Create an Express app
const app = express();

// Set up a WebSocket server
const wss = new WebSocket.Server({ noServer: true });

// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send a welcome message when the client connects
    ws.send(JSON.stringify({ message: 'Welcome to the trade copier WebSocket server!' }));

    // Handle incoming messages from the client
    ws.on('message', (message) => {
        console.log('Received:', message);

        // Example of sending a response back to the client
        ws.send(JSON.stringify({ message: 'Message received', data: message }));
    });

    // Handle connection close
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Set up Express to handle WebSocket upgrades
app.server = app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

app.server.on('upgrade', (request, socket, head) => {
    // WebSocket connection upgrade logic
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});