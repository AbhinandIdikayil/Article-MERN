import express from 'express'
import cors from 'cors'
import { router } from './routes/routes'
import { errorHandler } from './middlewares/error.middleware'
import { corsOption, PORT } from './config/env'
import { connectDB } from './db'
import cookie from 'cookie-parser'
const app = express()

app.use(cookie())
app.use(cors(corsOption))
app.use(express.json())
app.use('/api', router)

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


app.use(errorHandler)


app.listen(PORT, async () => {
    await connectDB()
    console.log(`💻 server started running on ${PORT}`)
})