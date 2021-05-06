import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import VideoPlayer from "./VideoPlayer";

export default function HomeTwo() {
  const [timeInput, setTimeInput] = useState(null);
  const [expiryTimestamp, setExpiryTimeStamp] = useState(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  const handleTimerInput = (e) => {
    setTimeInput(e.target.value);
    let time = new Date();
    time.setSeconds(time.getSeconds() + e.target.value * 60);
    setExpiryTimeStamp(time);
  };

  const handleClearValue = () => {
    setTimeInput(0);
    setAutoPlay(false);
    setShowVideoPlayer(false);
  };

  const renderVideoPlayer = () => {
    setShowVideoPlayer(false);
  };

  const handleTimerStart = () => {
    setAutoPlay(true);
    setShowVideoPlayer(true);
  };

  return (
    <div className={"home-two-container"}>
      <img
        style={{ maxHeight: "150px" }}
        src="https://upload.wikimedia.org/wikipedia/commons/3/38/Game_Grumps_logo_2018.png"
        alt="Game Grumps Logo"
      ></img>
      <h1>Sleep Timer App</h1>
      <br></br>
      {!showVideoPlayer && (
        <>
          <h3>Enter a time in minutes</h3>
          <div className="form-group" style={{ margin: "auto", width: "10%" }}>
            <input
              className="form-control"
              value={timeInput}
              onChange={handleTimerInput}
              type="number"
              max="120"
              min="1"
            />
          </div>
        </>
      )}
      <CountdownTimer
        expiryTimestamp={expiryTimestamp}
        startTime={timeInput}
        clearValue={handleClearValue}
        renderVideoPlayer={renderVideoPlayer}
        handleTimerStart={handleTimerStart}
      />
      <br />
      {showVideoPlayer && <VideoPlayer autoPlay={autoPlay} />}
      {!showVideoPlayer && (
        <div>
          <h4>
            Input a time to begin, then press{" "}
            <span style={{ color: "#3a80c7" }}>Start!</span>
          </h4>
          <h4>
            Press <span style={{ color: "#3a80c7" }}>Clear</span> to reset
          </h4>
        </div>
      )}
    </div>
  );
}
