const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncErrorHandler = require("../utils/asyncErrorHandler");
const CustomError = require("../utils/CustomError");
const auth = asyncErrorHandler  (async (req, res, next) => {
    let testToken = req.headers.authorization;
    let token;
    if (testToken && testToken.startsWith("Bearer")) {
      token = testToken.split(" ")[1];
    }
    if (!token) {
      const err = new CustomError(401, "Try Logging in,to Access");
      next(err)
    }
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedToken.id);
    if (!user) {
       const err = new CustomError(401, "Try Logging in,to Access");
       next(err);

    }
    req.user = user;
    next();
  })
  
const verifyRole = (role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
       const err = new CustomError(401, "youre not Authorized");
       next(err);
    }
    next();
  };
};
module.exports = { auth, verifyRole };
