const express = require("express");
const authRouter = require("./routes/userRoutes");
const adminRouter=require("./routes/adminRoutes")
const authorRouter=require("./routes/authorRoutes")
const blogRouter = require("./routes/blogRoutes");
const CustomError = require("./utils/CustomError");
const globalErrorControllers = require("./controllers/globalErrorControllers");

const app = express();

app.use(express.json());
app.use("/app/v1/users", authRouter);
app.use("/app/v1/blogs",blogRouter)
app.use("/app/v1/admin",adminRouter)
app.use("/app/v1/author",authorRouter)

app.all("*",(req,res,next)=>{
    let err=new CustomError(404,"Page Not Found")
    next(err)
})
//Global Error Handler
app.use(globalErrorControllers)





module.exports = app;
