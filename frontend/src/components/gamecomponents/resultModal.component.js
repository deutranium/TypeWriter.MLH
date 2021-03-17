import React, { Component } from 'react'
import { useState, useRef } from 'react';
import {render} from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Results
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>User Time:</h6>
          <p>
            Display User Time here
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App(props) {
    const [modalShow, setModalShow] = React.useState(props.resultTime);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default App;