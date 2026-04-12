import express from "express";
import { filterInfo } from "../controller/dbQuery.controller";

const dbQueryRouter = express.Router()

dbQueryRouter.get('/filter',filterInfo)

export default dbQueryRouter