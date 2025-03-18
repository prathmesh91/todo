import React, { useEffect, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const timer =
      isRunning &&
      setInterval(() => {
        setTime(time + 10);
      }, 10);
    return () => clearInterval(timer);
  }, [time, isRunning]);
  const timeFormat = (t) => {
    const hr = String(Math.floor(t / 3600000)).padStart(2, "0");
    const min = String(Math.floor((t % 3600000) / 60000)).padStart(2, "0");
    const sec = String(Math.floor((t % 60000) / 1000)).padStart(2, "0");
    const ms = String(t % 1000)
      .padStart(3, "0")
      .slice(0, 2);
    return `${hr}:${min}:${sec}:${ms}`;
  };

  return (
    <div>
      <h2>Stop Watch</h2>
      <h1>{timeFormat(time)}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "pause" : "start"}
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          setTime(0) && setIsRunning(!isRunning);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default StopWatch;
