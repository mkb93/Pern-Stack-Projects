import React, { useState } from "react";
import "./Modal.css";
export default function Modal({todo, onButtonPress}) {
  const [modal, setModal] = useState(false);
  const [text, setText] = useState(todo.description);

  const toggleModal = () => {
    setModal(!modal);
  };
  const updateDescription = async (e)=>{
    e.preventDefault()
    try {
      const body =  { description: text } ;
      const response = await fetch(`http://localhost:5000/todo/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      console.log(body)
      console.log(response)
    } catch (error) {
      console.error(error.message)
    }
    onButtonPress()
    toggleModal()
   
  }
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="edit-btn">
        Edit
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <h2>Press button when done</h2>
            <form>
              <input className="modal-input" 
              value={text} 
              onChange={e => setText(e.target.value)}></input>
              <button className="modal-edit-btn" onClick={e => updateDescription(e)}>Edit</button>
            </form>
            
          
            <button className="exit-btn" onClick={toggleModal}>
            EXIT
            </button>
          </div>
        </div>
      )}
    
    </>
  );
}