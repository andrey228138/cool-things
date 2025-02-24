import { useState } from "react";
import './Input.css'
export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const calculateResult = () => {
    setResult((inputValue * 3) / 2);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Введите сумму"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
      />
      <button className="input-btn" onClick={calculateResult} >
        Посчитать
      </button>
      <h2>Ответ:{result} </h2>
    </>
  );
}
