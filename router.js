const express = require("express")
const router = express.Router()
const sqlite = require("sqlite3").verbose()
const db =new sqlite.Database("myDatabase.db")
db.run("CREATE TABLE IF NOT EXISTS phrases (id INTEGER KEY,title TEXT,description TEXT,plan TEXT,dc TEXT)")

router.route("")
  .get((req,res)=>{
    db.all("SELECT * FROM phrases",(error,rows)=>{ 
      if(error){
        res.send("Error!")
      }else{
        res.send(rows)
      }
    })
  })
  .post((req,res)=>{
    db.run("INSERT INTO phrases VALUES(?,?,?,?,?)",[Date.now(),req.body.title,req.body.description,req.body.plan,req.body.dc],(result,error)=>{
        if(error){
            res.send("Error")
        }else{
            res.send("Added Item!")
        }
    })
  })
  .delete((req,res)=>{
   
  })

router.route("/:id")
  .get((req,res)=>{
    db.run("SELECT * FROM phrases WHERE id = ?",[req.params.id],(error,row)=>{
      if(error){
        res.send("Error!")
      }else{
        res.send(row)
      }
    })
  })
  .put((req,res)=>{

  })
  .patch((req,res)=>{
    db.run("UPDATE phrases SET title=? WHERE id = ?",[req.params.title,Number(req.params.id)],(error)=>{
      if(error){
        res.send("Error!")
      }else{
        res.send("Updated Item!")
      }
    })
  })
  .delete((req,res)=>{
    db.run("DELETE FROM phrases WHERE id = ?",[Number(req.params.id)],(error)=>{
        if(error){
          res.send("Error!")
        }else{
          res.send("Deleted Item!")
        }
      })
  })

  module.exports = router