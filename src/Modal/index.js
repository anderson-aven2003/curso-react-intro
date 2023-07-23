import React from "react";
import ReactDOM  from "react";
import './Modal.css';

function Modal({children}){
return ReactDOM.createPortal (
    <div className="ModalBackground">
        {children}
    </div>,
    document.getElementById('modal')
);
}

export {Modal};