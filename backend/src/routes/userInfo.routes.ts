import express from "express"
import { createUserInfo, getUserInfo } from "../controller/userInfo.controller"

const userInfoRouter = express.Router()

userInfoRouter.post('/create',createUserInfo)
userInfoRouter.get('/get',getUserInfo)

export default userInfoRouter