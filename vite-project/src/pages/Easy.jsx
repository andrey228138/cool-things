import Modal from "../components/Modal/Modal";
import Toggle from "../components/Toggle/Toggle";
import { useState } from "react";
export default function Easy() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <main className="wrapper">
   <Modal modalActive={modalActive} setModalActive={setModalActive} />
      <div className="wrapper">
        <h2>Модалка</h2>
        <button className="open-btn" onClick={() => setModalActive(true)}>
          Открыть
        </button>
      </div>
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
      <h2>Toggle</h2>
      <Toggle></Toggle>
    </main>
  );
}
