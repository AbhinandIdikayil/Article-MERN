import express from 'express'
import cors from 'cors'
import { router } from './routes/routes'
import { errorHandler } from './middlewares/error.middleware'
import { corsOption, PORT } from './config/env'
import { connectDB } from './db'
import cookie from 'cookie-parser'
import morgan from 'morgan'
import { logger } from './utils/logger'
import helmet from 'helmet'
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
app.use(helmet({
    crossOriginResourcePolicy: {
        policy: 'cross-origin',
    },
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"], // Restricts everything to same origin by default
            scriptSrc: ["'self'", 'https://article-mern.vercel.app'], // Allow scripts from the frontend
            styleSrc: ["'self'", 'https://fonts.googleapis.com'], // Example for allowing Google Fonts
            imgSrc: ["'self'", 'data:', 'https://article-mern.vercel.app'], // Allow images from frontend
            connectSrc: ["'self'", 'https://article-mern.vercel.app'], // Allow API requests from frontend
            fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Allow fonts from specific sources
            objectSrc: ["'none'"], // Disallow <object>, <embed>, <applet> for security
            frameAncestors: ["'self'"], // Prevent embedding in frames or iframes on other sites
            upgradeInsecureRequests: [], // Automatically upgrade HTTP requests to HTTPS
        },
    }
},
))
app.use('/api', router)


app.use(errorHandler)


app.listen(PORT, async () => {
    await connectDB()
    console.log(`💻 server started running on ${PORT}`)
})