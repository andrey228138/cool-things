import { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [activeTimer, setActiveTimer] = useState(false);

  function resetTimer() {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setActiveTimer(false);
  }

  useEffect(() => {
    let intervalId;

    if (activeTimer) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [activeTimer]);
  useEffect(() => {
    if (seconds == 59) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
      if (minutes == 59) {
        setMinutes(0);
        setHours((prev) => prev + 1);
      }
    }
  }, [seconds]);
  return (
    <div className="wrapper-timer">
      <div className="wrapper-timer-count">
        <div>{hours}</div>:<div>{minutes}</div>: <div>{seconds}</div>
      </div>
      <div className="wrapper-button">
        <button className="btn" onClick={() => setActiveTimer(true)}>
          Start
        </button>
        <button className="btn" onClick={resetTimer}>
          Reset
        </button>
        <button className="btn" onClick={() => setActiveTimer(false)}>
          Stop
        </button>
      </div>
    </div>
  );
}
