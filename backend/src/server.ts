import 'dotenv/config'
import express from 'express'
import {connectDB} from './config/db'
import userInfoRouter from './routes/userInfo.routes'

const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

app.use('/api/userInfo',userInfoRouter)
connectDB()
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})