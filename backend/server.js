import * as dotenv from "dotenv"
import express from 'express'
import AuthRouter from './src/Routes/AuthRoutes.js'
import UserRouter from './src/Routes/UserRoutes.js'
import ProductRouter from './src/Routes/ProductRoutes.js'
dotenv.config()

const app = express()
const port = 3000

app.use(express.json())
app.use('/auth', AuthRouter)
app.use('/users', UserRouter)
app.use('/products', ProductRouter)

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})






