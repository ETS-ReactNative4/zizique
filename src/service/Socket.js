const { io } = require("socket.io-client");
let socket

export function connectSocket() {
    socket = io("ws://localhost:8080");
}

export function emitSocket(event,msg) {
    socket.emit(event,msg);
}


export function listenSocket(event) {
    socket.on(event,(msg) => {
        return msg
    });
}