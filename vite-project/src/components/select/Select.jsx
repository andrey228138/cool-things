import { useState } from "react";
import "./select.css";
export default function Select() {
  const [count, setCount] = useState(0);
  const [openSelect, setOpenSelect] = useState(false);
  const [topSelect, setTopSelect] = useState("Взять селект");

  const handleSelectClick = (value) => {
    setTopSelect(value); 
    setOpenSelect(false); 
  };

  const toggleSelect = () => {
    setOpenSelect(!openSelect);
  };
  return (
    <div className="select-wrapper">
      <div className="top" onClick={toggleSelect}>
        {topSelect}
      </div>
      <ul className={openSelect ? "bottom active" : "bottom"}>
        <li onClick={() => handleSelectClick("1 option")} value={"1 option"}>
          1 option
        </li>
        <li onClick={() => handleSelectClick("2 option")} value={"2 option"}>
          2 option
        </li>
        <li onClick={() => handleSelectClick("3 option")} value={"3 option"}>
          3 option
        </li>
      </ul>
    </div>
  );
}
