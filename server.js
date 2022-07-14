require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT | 5000;

const cardRouter = require("./routes/card");
const boardRouter = require("./routes/board");

// middleware
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/cards", cardRouter);
app.use("/api/boards", boardRouter);

app.get("/", (req, res) => {
  res.send("Root");
});

app.listen(port, () => {
  console.log(` App listening on port ${port}`);
});
