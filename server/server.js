const express = require('express')
require("dotenv").config()

const app = express()



app.get('/',(req,res)=>{
    res.json({msg:"welcomme to students API 1.0"})
})

app.use("/api/students",require("./routes/studentRoutes"))

app.listen(1234,()=>{
    console.log("server is running  at port :1234")
})