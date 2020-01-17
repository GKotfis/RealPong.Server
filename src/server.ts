
import { Request, Response, Application } from 'express';
import express = require('express');
import socketio = require('socket.io')
import * as path from 'path'
const fs = require("fs");


const app: Application = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

let http = require("https").createServer(
    {
        key: fs.readFileSync("server.key"),
        cert: fs.readFileSync("server.cert")
    },
    app
);
let io = socketio(http, { perMessageDeflate: false });


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("move_player", (data) => {
        console.log("move player:", data);
        io.emit('move_player', data);
    })
});


const server = http.listen(app.get("port"), () => {
    console.log(
        "  App is running at https://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});


export default server;