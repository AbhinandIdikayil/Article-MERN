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
            scriptSrc: ["'self'", 'https://article-mern.vercel.app'],
            styleSrc: ["'self'", 'https://fonts.googleapis.com', "'unsafe-inline'"], // Added unsafe-inline for Google Fonts
            imgSrc: ["'self'", 'https://article-mern.vercel.app', 'data:', 'https:'], 
            connectSrc: ["'self'", 'https://article-mern.vercel.app'],
            fontSrc: ["'self'", 'https://fonts.gstatic.com'],
            objectSrc: ["'none'"],
            frameAncestors: ["'none'"], // Stricter than 'self'
            formAction: ["'self'"], // Restrict form submissions
            upgradeInsecureRequests: [], // Force HTTPS
            baseUri: ["'self'"], // Restrict base-uri
        },
        reportOnly: false, // Enable enforcement
        useDefaults: true
    },
    frameguard: { action: 'deny' },
    noSniff: true,
    hsts: { // Add HSTS
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    },
    referrerPolicy: { // Add Referrer Policy
        policy: 'strict-origin-when-cross-origin'
    },
    xssFilter: true // Enable XSS filter
}));
app.use('/api', router)


app.use(errorHandler)


app.listen(PORT, async () => {
    await connectDB()
    console.log(`💻 server started running on ${PORT}`)
})