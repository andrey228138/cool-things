import { useState } from "react";
import "./Toggle.css";
export default function Toggle() {
  const [activeToggle, setActiveToggle] = useState(false);

  return (
    <div
      className="toggle-wrapper"
      onClick={()=>setActiveToggle(!activeToggle)}
    >
      <div className={activeToggle ? "circle active" : "circle"}></div>
    </div>
  );
}
