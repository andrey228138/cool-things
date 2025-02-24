import { useState } from "react";
import "./HardCalculate.css";

export default function HardCalculate() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <div className="wrapper-calculate-hard">
        <input
          type="number"
          className="input-result-calculate-hard"
          onChange={(e) => setInput(Number(e.target.value))} // Преобразуем в число при изменении
        />
        <button
          className="btn-result-calculate-hard"
          onClick={() => setResult(input)}
        >
          Решить
        </button>
        <h2 className="result-calculate-hard">{result}</h2> {/* Оставляем result как есть */}
      </div>
    </>
  );
}