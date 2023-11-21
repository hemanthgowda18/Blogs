const express = require("express");
const authRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");

const app = express();

app.use(express.json());
app.use("/app/v1/users", authRouter);
app.use("/app/v1/blogs",blogRouter)

module.exports = app;
