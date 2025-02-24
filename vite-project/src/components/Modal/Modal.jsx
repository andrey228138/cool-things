import { useState } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

export default function Modal({ setModalActive, modalActive }) {
  const stopPropagination = (event) => {
    event.stopPropagation(); 
  };

  return createPortal(
    <div className={modalActive ? "modal active" : "modal"}>
      <div className="modal-overlay" onClick={() => setModalActive(false)}>
        <div className="content" onClick={stopPropagination}>
          <button className="close-btn" onClick={() => setModalActive(false)}>
            Close
          </button>
          <h2 className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quod
            minima quisquam iusto ratione suscipit, ipsum necessitatibus dolores
            tenetur exercitationem? Cumque esse, accusantium nobis aliquam
            cupiditate pariatur. Aspernatur, expedita consectetur.
          </h2>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}