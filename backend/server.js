import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import path from 'path'

import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/mongoDB.js'
import ratelimiter from './middleware/rateLimiter.js'

const app = express()
const PORT = process.env.PORT || 5050
const __dirname = path.resolve()

// best to be first
if (process.env.NODE_ENV === 'production') {
    app.use(cors({
        origin: 'http://localhost:5175'
    })
    )
}

app.use(express.json())// middleware //so we can use req.body in sending req
app.use(ratelimiter)

app.use('/api/notes', notesRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    // ✅ Catch-all for React Router (Express 5 compatible)
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    });
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}/`)
    })
})
