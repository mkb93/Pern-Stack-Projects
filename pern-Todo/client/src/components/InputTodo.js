import { Fragment, useState } from "react"
import React from 'react'

function InputTodo({input, onButtonPress}) {
  const [ description, setDescription]= useState("");
  let value = input
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todo", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      setDescription("");
      console.log(response)
    } catch (error) {
      console.error(error.message)
    }
    onButtonPress()
  }
  return (
    <Fragment >
    <h1 className="main_title">Todo List</h1>
    <form className="top_form" onSubmit={onSubmitForm}>
      <input 
      className="top_form_input" 
      value={description} 
      onChange={e => setDescription(e.target.value)}
      />
      <button className="top_form_input_btn">{value}</button>
    </form>
    </Fragment>
  )
}

export default InputTodo