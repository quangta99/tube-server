import express, {Request, Response} from 'express'
import { json } from 'body-parser'
import mongoose from 'mongoose'
require('dotenv').config()

import { route } from './Routes/routes'

const app = express()
app.use(function(req: Request, res: Response, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(json())
app.use(route)


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
