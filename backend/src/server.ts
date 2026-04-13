import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db'
import userInfoRouter from './routes/userInfo.routes'
import dbQueryRouter from './routes/dbQuery.routes'

const app = express()
const PORT = process.env.PORT || 5000

// ✅ 1. cors first
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

// ✅ 2. body parsing second
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ✅ 3. routes last
app.use('/api/userInfo', userInfoRouter)
app.use('/api/userInfo', dbQueryRouter)

connectDB()

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})