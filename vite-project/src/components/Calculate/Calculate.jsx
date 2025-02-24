import { useState } from "react";
import "./Calculate.css";

export default function Calculate() {
  const [numberOne, setNumberOne] = useState("");
  const [select, setSelect] = useState("/");
  const [numberTwo, setNumberTwo] = useState("");
  const [result, setResult] = useState("");

  function count() {
    const num1 = parseFloat(numberOne);
    const num2 = parseFloat(numberTwo);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Введите число");
      return;
    }

    switch (select) {
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        if (num2 === 0) {
          setResult("Деление на ноль!");
          return;
        }
        setResult(num1 / num2);
        break;
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      default:
        setResult("Неизвестная операция");
    }
  }

  return (
    <div className="wrapper-calculate">
      <input
        type="number"
        className="input-calculate"
        placeholder="1 Число"
        value={numberOne}
        onChange={(e) => setNumberOne(e.target.value)}
      />
      <select
        name=""
        id=""
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="/">/</option>
        <option value="*">*</option>
        <option value="-">-</option>
        <option value="+">+</option>
      </select>
      <input
        type="number"
        className="input-calculate"
        placeholder="2 Число"
        value={numberTwo}
        onChange={(e) => setNumberTwo(e.target.value)}
      />
      <button className="btn-calculate" onClick={count}>
        Посчитать
      </button>
      <h2>Ответ: {result}</h2>
    </div>
  );
}
