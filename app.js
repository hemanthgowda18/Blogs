const express = require("express");
const authRouter = require("./routes/userRoutes");
const flash = require("connect-flash");
const cookieSession = require("cookie-session");
const adminRouter = require("./routes/adminRoutes");
const authorRouter = require("./routes/authorRoutes");
const blogRouter = require("./routes/blogRoutes");
const CustomError = require("./utils/CustomError");
const globalErrorControllers = require("./controllers/globalErrorControllers");

const app = express();
// //register template engine
app.set("view engine", "ejs");

app.use(
  cookieSession({
    name: "session",
    keys: ["your-secret-key"],
    maxAge: 24 * 60 * 60 * 1000, //24 hours
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
    next()
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/app/v1/welcome", (req, res) => {
  res.render("welcome")
});
app.use("/app/v1/users", authRouter);
app.use("/app/v1/blogs", blogRouter);
app.use("/app/v1/admin", adminRouter);
app.use("/app/v1/author", authorRouter);

app.all("*", (req, res, next) => {
  let err = new CustomError(404, "Page Not Found");
  next(err);
});
// //Global Error Handler
app.use(globalErrorControllers);

module.exports = app;
