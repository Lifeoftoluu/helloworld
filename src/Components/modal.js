import React from "react";
import ReactDOM from "react-dom";
import ModalInner from "./modal-inner";
//import { Modal } from "react-bootstrap";

function userModal(props) {
    return ReactDOM
    .createPortal(
       <ModalInner {...props} />,
       document.querySelector("#modal")                      
     );
}
export default userModal; 