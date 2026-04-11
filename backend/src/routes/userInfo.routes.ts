import express from "express"
import { createUserInfo } from "../controller/userInfo.controller"

const userInfoRouter = express.Router()

userInfoRouter.post('/create',createUserInfo)

export default userInfoRouter