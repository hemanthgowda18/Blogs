const {loginWrapper,signupWrapper}=require("../utils/auth")
const User=require("../models/User")


const login=loginWrapper(User)
const signup=signupWrapper(User)

module.exports={
  login,signup
}