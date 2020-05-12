import React from "react";
import ReactDOM from "react-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalRe = (props) => {
  return ReactDOM.createPortal(
    <Modal isOpen={true} toggle={props.onDismiss}>
      <ModalHeader>{props.title}</ModalHeader>
      <ModalBody>{props.body}</ModalBody>
      <ModalFooter>{props.actions}</ModalFooter>
    </Modal>,
    document.querySelector("#modal")
  );
};

export default ModalRe;
