import React, { Component } from 'react'
import { useState, useRef, useEffect } from 'react';
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
            <strong>{props.total}</strong> <em>js programming words in</em> <strong>{props.time}</strong> <em>seconds</em>
          </p>
          <h6>Average Time:</h6>
          <p>
          <strong>{(props.total / props.time)*60}</strong> <em>js words per minute</em>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{window.location.href="/game"}}>Start Again</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App(props) {
    const [modalShow, setModalShow] = React.useState(props.resultTime);
    useEffect(() => {
      setModalShow(props.resultTime);
    }, [props.resultTime])
  
    return (
      <>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          total={props.total}
          time={props.time}
          onHide={()=>{window.location.href="/game"}}
        />
      </>
    );
  }

  export default App;