import React, { useState } from "react";
import "./Payment.css";

export default function YearSelect({ openSelect, setOpenSelect, onChange }) {
  const [topSelect, setTopSelect] = useState("Year");

  const years = [
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
  ];

  const handleSelectClick = (year) => {
    setTopSelect(year); // Устанавливаем выбранный год
    onChange(year); // Передаем выбранный год в родительский компонент
    setOpenSelect(false); // Закрываем выпадающий список
  };

  const toggleSelect = () => {
    setOpenSelect((prev) => !prev); // Переключаем состояние открытия/закрытия
  };

  return (
    <div className="select-wrapper-expries">
      <div className="top-expries" onClick={toggleSelect}>
        {topSelect}
      </div>
      <ul className={openSelect ? "bottom-expries active" : "bottom-expries"}>
        {years.map((year) => (
          <li
            key={year}
            onClick={() => handleSelectClick(year)}
            value={year}
          >
            {year}
          </li>
        ))}
      </ul>
    </div>
  );
}