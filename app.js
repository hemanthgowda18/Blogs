const express = require("express");
const authRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");
const CustomError = require("./utils/CustomError");
const globalErrorControllers = require("./controllers/globalErrorControllers");

const app = express();

app.use(express.json());
app.use("/app/v1/users", authRouter);
app.use("/app/v1/blogs",blogRouter)

app.all("*",(req,res,next)=>{
    // res.status(404).json({status:"fail",message:"page not found"})
    // let err=new Error("Page Not Found")
    // err.statusCode=404
    // err.status="fail"
    // next(err)
    let err=new CustomError(404,"Page Not Found")
    next(err)
})
//Global Error Handler
app.use(globalErrorControllers)





module.exports = app;
