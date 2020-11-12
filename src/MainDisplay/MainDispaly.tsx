import React, { useState, useEffect } from "react";
import "./MainDisplay.css";
import calculate from "../CalculateTimer/calculate";
import Controller from "../Controllers/Controller";

function MainDisplay() {
  const [timeSec, setTimeSec] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timerArray: Array<number | string> = calculate(timeSec);
    setTimerArray(timerArray);
  }, [timeSec]);

  return (
    <>
      <div className="App">
       
        <p className="timer_text">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer_text">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer_text">{timerArray[2]}</p>
      </div>
      <div>
        <Controller setTimeSec={setTimeSec} />
      </div>
    </>
  );
}

export default MainDisplay;
