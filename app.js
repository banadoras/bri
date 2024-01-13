require("dotenv").config();
var cors = require('cors')
const express = require("express")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get("/:password",(req,res)=>{
    const password = req.params.password
    if(password === process.env.PASSWORD){
        const data = require("./data")
        res.send(data)
    }else{
        res.send([])
    }
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Listening to port 3000")
})