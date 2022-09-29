const express = require("express");
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/error");
require("express-async-errors");
require("dotenv").config();
require("./db");
const cors = require("cors");
const userRouter = require("./routes/user");
const imdbRouter = require("./routes/imdb");
const { handleNotFound } = require("./utils/helper");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/imdb", imdbRouter);

app.use("/*", handleNotFound);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("listening on port 8000");
});
