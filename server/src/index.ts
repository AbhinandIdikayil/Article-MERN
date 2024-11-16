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
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", 'https://article-mern.vercel.app'], // Allow scripts from frontend
            styleSrc: ["'self'", 'https://fonts.googleapis.com'], // Allow Google Fonts
            imgSrc: ["'self'", 'https://article-mern.vercel.app', 'data:'], // Allow images from frontend and data URIs
            connectSrc: ["'self'", 'https://article-mern.vercel.app'], // Allow API calls from frontend
            fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Allow fonts from Google Fonts
            objectSrc: ["'none'"], // Disallow <object>, <embed>, <applet> tags
            frameAncestors: ["'self'"], // Prevent embedding on other sites
            upgradeInsecureRequests: [],
            reportUri: '/csp-violation-report-endpoint', // Optional, for receiving reports
        },
        reportOnly: true,
        useDefaults: true
    },
    frameguard:{action:'deny'},
    noSniff:true,
}))
app.use('/api', router)


app.use(errorHandler)


app.listen(PORT, async () => {
    await connectDB()
    console.log(`💻 server started running on ${PORT}`)
})