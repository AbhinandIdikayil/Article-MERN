import express from 'express'
import cors from 'cors'
import { router } from './routes/routes'
import { errorHandler } from './middlewares/error.middleware'
import { PORT } from './config/env'
import { connectDB } from './db'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.use(errorHandler)


app.listen(PORT, async () => {
    await connectDB()
    console.log(`💻 server started running on ${PORT}`)
})