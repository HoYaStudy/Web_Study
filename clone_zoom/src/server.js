import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const sockets = [];

wss.on("connection", (socket) => {
  console.log("Connected to Browser");

  sockets.push(socket);

  socket["nickname"] = "Anonymous";

  socket.on("close", () => console.log("Disconnected from Browser"));
  socket.on("message", (msg) => {
    const parsedMsg = JSON.parse(msg);
    switch (parsedMsg.type) {
      case "message":
        sockets.forEach((s) => s.send(`${s.nickname}: ${parsedMsg.payload}`));
        break;
      case "nickname":
        socket["nickname"] = parsedMsg.payload;
        break;
    }
  });
});

server.listen(3000, () => console.log(`Listening on http://localhost:3000`));
