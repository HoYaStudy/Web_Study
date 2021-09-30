import http from "http";
import express from "express";
import { Server } from "socket.io";
import { instrument } from "@socket.io/admin-ui";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = new Server(httpServer, {
  cors: { origin: ["https://admin.socket.io"], credentials: true },
});

instrument(wsServer, { auth: false });

function publicRooms() {
  const {
    sockets: {
      adapter: { sids, rooms },
    },
  } = wsServer;
  const publicRooms = [];
  rooms.forEach((_, key) => {
    if (sids.get(key) === undefined) {
      publicRooms.push(key);
    }
  });
  return publicRooms;
}

function countRoom(roomName) {
  return wsServer.sockets.adapter.rooms.get(roomName)?.size;
}

wsServer.on("connection", (socket) => {
  socket["nickname"] = "Anonymous";
  socket.onAny((event) => console.log(`Socket Event: ${event}`));
  socket.on("enter_room", (roomName, done) => {
    socket.join(roomName);
    done();
    socket.to(roomName).emit("welcome", socket.nickname, countRoom(roomName));
    wsServer.sockets.emit("room_change", publicRooms());
  });
  socket.on("nickname", (nickname) => (socket["nickname"] = nickname));
  socket.on("new_message", (roomName, msg, done) => {
    socket.to(roomName).emit("new_message", `${socket.nickname}: ${msg}`);
    done();
  });
  socket.on("disconnecting", () => {
    socket.rooms.forEach((roomName) =>
      socket.to(roomName).emit("bye", socket.nickname, countRoom(roomName) - 1)
    );
  });
  socket.on("disconnect", () =>
    wsServer.sockets.emit("room_change", publicRooms())
  );
});

httpServer.listen(3000, () =>
  console.log(`Listening on http://localhost:3000`)
);
