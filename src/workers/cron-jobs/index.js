const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("PING PONG FROM CRON JOBS");
});

const server = http.createServer(app);

server.listen(process.env.PORT || 3020);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + 3020;
  //eslint-disable-next-line
  console.log("CRON JOBS Listening on " + bind);
});
