import React, { useState } from "react";
import "./Payment.css";

export default function ExpiresSelect({ openSelect, setOpenSelect, onChange }) {
  const [topSelect, setTopSelect] = useState("Month");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleSelectClick = (month) => {
    setTopSelect(month); // Устанавливаем выбранный месяц
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
        {months.map((month) => (
          <li
            key={month}
            onClick={() => handleSelectClick(month)}
            value={month}
          >
            {month}
          </li>
        ))}
      </ul>
    </div>
  );
}