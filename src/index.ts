import express from 'express'
import { json } from 'body-parser'
import mongoose from 'mongoose'
require('dotenv').config()

import { route } from './Routes/routes'

const app = express()

app.use(json())
app.use(route)

// const host = process.env.MONGO_HOSTNAME
// const mongoPort = process.env.MONGO_PORT
const db = process.env.MONGO_DB
const connecter = process.env.MONGO_CONNECTER

console.log(`mongodb+srv://${connecter}/${db}`);

mongoose.connect(`mongodb+srv://${connecter}/${db}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=> {
    console.log('connected mongodb')
})

const port = process.env.PORT


app.listen(port, ()=> {
    console.log('server is listen on port', port);
})
