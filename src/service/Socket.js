const { io } = require("socket.io-client");
let socket;

export function connectSocket() {
    socket = io("ws://localhost:8080");
}

export function emitSocket(event,msg) {
    if(!socket){
        connectSocket()
    }
    socket.emit(event,msg);
}


export function listenSocket(event,callback) {
    if(!socket){
        connectSocket()
    }
    socket.on(event,(msg) => {
        callback(msg)
    });
}