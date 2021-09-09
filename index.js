const express = require('express')
const { stopCoverage } = require('v8')
require('mongoose')
const models = require('./db/mongoose')
const app = express()
const apirouter = require('./routers/teacher-stu')
app.use(express.json())
//API  DEVELOPED AND DEPLOYED BY 
// A .  GOVARDHAN REDDY - ASSIGNMENT T18 Innovations 


// NOTE : NPM 's to be installe d
// Express JS
// Node mon
// Mongoose for mongo db


app.use(apirouter)

app.listen(3000,(req,res)=>{
    console.log("On port : 3000")
})