import React from "react";
import { useTimer } from "react-timer-hook";

export default function CountdownTimer({ expiryTimestamp, ...props }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => props.renderVideoPlayer(),
  });

  const handleClear = () => {
    pause();
    props.clearValue();
    let time = new Date();
    time.setSeconds(time.getSeconds());
    restart(time);
  };

  const handleStart = () => {
    let time = new Date();
    time.setSeconds(time.getSeconds() + props.startTime * 60);
    props.handleTimerStart();
    restart(time);
  };

  const handlePause = () => {
    props.handleTimerPause();
    pause();
  };

  const handleResume = () => {
    props.handleTimerResume();
    resume();
  };

  const timerFontSize = isRunning ? "2rem" : "4rem";

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: timerFontSize }}>
        <span>{hours}</span>:
        <span>
          {minutes < 10 ? 0 : null}
          {minutes}
        </span>
        :
        <span>
          {seconds < 10 ? 0 : null}
          {seconds}
        </span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      <span style={{ padding: "10px" }}>
        <button className="btn btn-primary" onClick={handleStart}>
          {props.startText}
        </button>
      </span>
      <span style={{ padding: "10px" }}>
        <button className="btn btn-primary" onClick={handlePause}>
          Pause
        </button>
      </span>
      <span style={{ padding: "10px" }}>
        <button className="btn btn-primary" onClick={handleResume}>
          Resume
        </button>
      </span>
      <span style={{ padding: "10px" }}>
        <button className="btn btn-primary" onClick={handleClear}>
          Clear
        </button>
      </span>
    </div>
  );
}
