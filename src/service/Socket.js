const { io } = require("socket.io-client");
let socket;

export function connectSocket() {
    socket = io("https://cucuque.herokuapp.com");
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