import { sendChatService } from "../services/chat.service.js";

export const registerSocketHandlers = (io) => {
    const onlineUsers = new Map();
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("user-online", (userId) => {
            onlineUsers.set(userId, socket.id);

            console.log("Online Users:", onlineUsers);
        });

        socket.on("send-message", async (data) => {

            try{
                // const {}
            }
            
        })
    })
}