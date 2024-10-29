import express from 'express'
import cors from 'cors'
import { router } from './routes/routes'
import { errorHandler } from './middlewares/error.middleware'
import { corsOption, PORT } from './config/env'
import { connectDB } from './db'
import cookie from 'cookie-parser'
import morgan from 'morgan'
import { logger } from './utils/logger'
const app = express()


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
const morganStream = {
    write: (message: any) => logger.info(message.trim()) 
};
app.use(morgan('combined', { stream: morganStream }));

app.use(cookie())
app.use(cors(corsOption))
app.use('/api', router)




app.use(errorHandler)


app.listen(PORT, async () => {
    await connectDB()
    console.log(`💻 server started running on ${PORT}`)
})