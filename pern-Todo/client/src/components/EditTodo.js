import React from 'react'
import Modal from './Modal/Modal'
function EditTodo({todo, onButtonPress}) {
 

  return (
    <div><Modal todo={todo} onButtonPress={onButtonPress}/></div>
  )
}

export default EditTodo
