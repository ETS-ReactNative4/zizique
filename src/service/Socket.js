const { io } = require("socket.io-client");

export function connectSocket() {
    const socket = io("ws://localhost:8080");
    return socket
}

