// var express = require('express')
// var cors = require('cors')
// var bodyParser = require('body-parser')
// var userRoute = require("./routes/userRoutes.js")
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoute from './routes/userRoutes.js'
import "./db/conn.js"


const app = express()

const port = 5000

app.use(bodyParser.json())

app.use(cors())

app.use("/",userRoute)

//app.get("/",(req,res)=>res.send("Hello from Express"))


app.listen(port,()=>console.log(`Server is listening on port ${port}`))