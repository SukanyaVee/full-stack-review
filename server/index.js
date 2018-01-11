const express =require('express')
const bodyParser=require('body-parser')
const massive= require ('massive')
const session = require('express-session')

require('dotenv').config()

const app=express(); 

app.use(bodyParser.json());
app.use(session({
    secret: process.env.CONNECTION_STRING,
    saveUninitialized: false,
    resave: false,
    // cookie: {maxAge=10000000}
}))

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
}).catch(error=>console.error(error))

const PORT=3035;
app.listen(PORT, ()=>console.log("listening on port: "+PORT));