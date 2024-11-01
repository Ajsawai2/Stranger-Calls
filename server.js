const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

const users = {}; // Store connected users
const botId = 'bot_user'; // Define a bot user ID

io.on('connection', (socket) => {
    console.log('A user connected');

    // Add user to users list
    users[socket.id] = socket;

    // Send the updated list of users to all clients
    io.emit('update-users', Object.keys(users).concat(botId)); // Include bot in the user list

    socket.on('offer', (offer, targetId) => {
        if (users[targetId]) {
            users[targetId].emit('offer', offer, socket.id);
        } else if (targetId === botId) {
            // Handle bot connection
            handleBotConnection(offer, socket);
        }
    });

    socket.on('answer', (answer, targetId) => {
        if (users[targetId]) {
            users[targetId].emit('answer', answer);
        } else if (targetId === botId) {
            // Simulate bot answering
            handleBotAnswer(answer, socket);
        }
    });

    socket.on('ice-candidate', (candidate, targetId) => {
        if (users[targetId]) {
            users[targetId].emit('ice-candidate', candidate);
        } else if (targetId === botId) {
            // Handle bot ICE candidates
            handleBotIceCandidate(candidate, socket);
        }
    });

    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected');
        delete users[socket.id];
        // Send the updated list of users to all clients
        io.emit('update-users', Object.keys(users).concat(botId)); // Include bot in the user list
    });
});

// Function to handle bot connection
function handleBotConnection(offer, socket) {
    // Create a mock answer for the bot
    const botAnswer = {}; // Create a response (mock answer)
    
    // Emit the answer back to the calling user
    socket.emit('answer', botAnswer, botId);
}

// Function to handle bot answering
function handleBotAnswer(answer, socket) {
    // Here you can add logic for the bot to respond to the answer
}

// Function to handle bot ICE candidates
function handleBotIceCandidate(candidate, socket) {
    // Here you can add logic for the bot to handle ICE candidates
    socket.emit('ice-candidate', candidate, botId); // Simulate sending back the candidate
}

server.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});