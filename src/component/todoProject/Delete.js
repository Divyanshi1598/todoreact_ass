import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style.css";

function Delete({id, deleteItem}) {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={handleShow}></i>
     

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are your sure want to delete
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" id="close" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" id="accept" onClick={()=>{deleteItem(id)}}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Delete;