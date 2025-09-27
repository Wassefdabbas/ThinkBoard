import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/mongoDB.js'
import ratelimiter from './middleware/rateLimiter.js'

const app = express()
const PORT = process.env.PORT || 5050

// best to be first
app.use(cors({
    origin: 'http://localhost:5175'
}))
app.use(express.json())// middleware //so we can use req.body in sending req
app.use(ratelimiter)

app.use('/api/notes', notesRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}/`)
    })
})
