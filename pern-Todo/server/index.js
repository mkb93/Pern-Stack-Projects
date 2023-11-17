const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');
//middleware
app.use(cors());
app.use(express.json()); //(lets you add req.body)

//routes
//create
app.post("/todo", async(req, res)=>{
  try{
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );
    res.json(newTodo)
  } catch(err){
    console.error(err.message)
  }
})
//get all
//get a
//update 
//delete
app.listen(5000, ()=>{
  console.log("server has started on port 5000");
})
