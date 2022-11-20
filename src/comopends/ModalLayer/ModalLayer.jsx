import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function ModalLayer({image}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="bg-transparent border-0" onClick={handleShow}>
        <i className="fa-solid fa-plus fa-6x "></i>
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <h3 >{image.tittle}</h3>{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={image.Img} className='w-100' alt="" />
            <p className="text-center pt-3">{image.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              className="Contact-btn text-white"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      {/* {ModalApi.map((mode, index) => (
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <h3 >{image.tittle}</h3>{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={image.Img} className='w-100' alt="" />
            <p>{image.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              className="Contact-btn text-white"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ))} */}
    </>
  );
}

export default ModalLayer;
