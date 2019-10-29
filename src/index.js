const http = require("http");
const express = require("express");
const cors = require("cors");

// eslint-disable-next-line
const models = require("./models");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("PING PONG");
});
app.use("/api/user", userRouter);

const server = http.createServer(app);

server.listen(process.env.PORT || 3010);

server.on("listening", () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + 3010;
  //eslint-disable-next-line
  console.log("Listening on " + bind);
});
