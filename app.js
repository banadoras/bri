const express = require("express")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/:password",(req,res)=>{
    const password = req.params.password
    if(password === "1234"){
        const data = require("./data")
        res.send(JSON.stringify(data))
    }else{
        res.send([])
    }
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Listening to port 3000")
})