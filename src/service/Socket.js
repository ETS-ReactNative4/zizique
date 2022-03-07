const { io } = require("socket.io-client");

export function connectSocket() {
    const socket = io("ws://localhost:8080");
    return socket;
}

export function emitSocket(event,msg) {
    socket.emit(event,msg);
}


export function listenSocket(event,callback) {
    socket.on(event,(msg) => {
        callback(msg)
    });
}