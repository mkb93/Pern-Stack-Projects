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
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0])
  } catch(err){
    console.error(err.message)
  }
})
//get all
app.get("/todo", async(req, res)=>{
  try {
    const allTodos = await pool.query("SELECT * FROM todo")
    res.json(allTodos.rows)
  } catch (error) {
    console.error(error.message)
  }
})
//get a
app.get("/todo/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
    res.json(todo.rows[0])
  } catch (error) {
      console.error(error.message)    
  }
})
//update 
app.put("/todo/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    const {description} = req.body;
    const todoUpdate = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
    res.json("todo was updated")
  } catch (error) {
    console.error(error.message)
  }
 
})
//delete
app.delete("/todo/:id", async(req, res)=>{
  try {
    
  
  const {id} = req.params;
  const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
  res.json('did it');
} catch (error) {
    console.error(error.message)
}
})
app.listen(5000, ()=>{
  console.log("server has started on port 5000");
  
})
