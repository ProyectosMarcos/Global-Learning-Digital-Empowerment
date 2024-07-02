import express from 'express'
import { INSTRUMENTOS } from './bdficticia.js'
import dotenv from 'dotenv'
import { instrumentsRouter } from './routes/instrumentsRouter.js'
import sayHello from './middlewares/sayHello.js'
import errorHandler from './middlewares/errorHandler.js'
import timeRequest from './middlewares/timeRequest.js'
import registerHTTP from './middlewares/registerHTTP.js'



dotenv.config()
const app = express()
app.use(express.json())
app.use(timeRequest)
app.use(registerHTTP)
app.use(sayHello)
app.use('/api', instrumentsRouter(INSTRUMENTOS))
app.use(errorHandler)


const SERVER_PORT = process.env.SERVER_PORT || 3001
app.listen(SERVER_PORT, () => {
    console.log(`Server running on port http://localhost:${SERVER_PORT}`)
}) 