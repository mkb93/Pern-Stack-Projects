import React, { Fragment, useState, useEffect } from 'react'
import EditTodo from './EditTodo';
function ListTodos({triggerUpdat, onButtonPress}) {
  const [todos, setTodos] = useState([])
  const [triggerUpdate, setUpdateTrigger] = useState(triggerUpdat)
 
  console.log(triggerUpdate)
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
  useEffect(() => {
    // Function to fetch todos
    const fetchData = async () => {
      await getTodos();
    };

    // Initial fetch
    fetchData();
  }, [triggerUpdat])
  


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
              <td><EditTodo todo={todo} onButtonPress={onButtonPress}/></td>
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