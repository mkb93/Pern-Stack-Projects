import React, { Fragment, useState, useEffect } from 'react'
import EditTodo from './EditTodo';
function ListTodos() {
  const [todos, setTodos] = useState([])
  const deleteTodo = async id => {
    try {
      const response = await fetch(`http://localhost:5000/todo/${id}`, {
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch(error){
      console.error(error.message)
    }
  }
  const getTodos = async () => {
    try {
      const response = await fetch( "http://localhost:5000/todo");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message)
    }
  }
  console.log(todos)
  useEffect(()=>{
    getTodos();
  },[])
  


  return (
    <Fragment>
      <div className='list-container'>
      <table className="list">
        <thead>
        <tr >
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
          {todos.map( todo => {
            return(
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodo/></td>
              <td>
                <button className='delete-btn' onClick={()=> deleteTodo(todo.todo_id)}>Delete</button>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
      <div className='list-bottom'>
      <button className='prev-btn'>previous</button>
      <button className='next-btn'>next</button>
      </div>
      </div>
    </Fragment>
    
  )
}

export default ListTodos;