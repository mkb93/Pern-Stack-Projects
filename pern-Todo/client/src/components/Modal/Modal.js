import React, { useState } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross } from '@fortawesome/free-solid-svg-icons'
export default function Modal({description}) {
  const [modal, setModal] = useState(false);
console.log(description)

  const toggleModal = () => {
    setModal(!modal);
  };

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
          <button className="edit-btn" onClick={toggleModal}>
              Edit
            </button>
          <button className="delete-btn" onClick={toggleModal}>
              Delete
            </button>
            <h2>{description}</h2>
            <form>
              input
            </form>
            
          
            <button className="exit-btn" onClick={toggleModal}>
            <FontAwesomeIcon icon={faCross} />
            </button>
          </div>
        </div>
      )}
    
    </>
  );
}