import React, { useState } from 'react'
import Modal from './Modal/Modal'
function EditTodo({todo}) {
  const [description, setDescription]=useState(todo.description)

  return (
    <div><Modal description={description}/></div>
  )
}

export default EditTodo
