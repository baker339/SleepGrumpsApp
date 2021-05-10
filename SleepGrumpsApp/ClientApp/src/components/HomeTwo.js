import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import VideoPlayer from "./VideoPlayer";

export default function HomeTwo() {
  const [timeInput, setTimeInput] = useState(0);
  const [expiryTimestamp, setExpiryTimeStamp] = useState(null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [displayHelpText, setDisplayHelpText] = useState(false);
  const [pauseVideo, setPauseVideo] = useState(false);

  const handleTimerInput = (e) => {
    setTimeInput(e.target.value);
    let time = new Date();
    time.setSeconds(time.getSeconds() + e.target.value * 60);
    setExpiryTimeStamp(time);
  };

  const handleClearValue = () => {
    setPauseVideo(true);
    setTimeInput(0);
    setAutoPlay(false);
    setShowVideoPlayer(false);
  };

  const renderVideoPlayer = () => {
    setShowVideoPlayer(false);
  };

  const handleTimerStart = () => {
    if (timeInput > 0 && timeInput <= 120) {
      setAutoPlay(true);
      setShowVideoPlayer(true);
      setDisplayHelpText(false);
      setPauseVideo(false);
    } else {
      setDisplayHelpText(true);
    }
  };

  const handleTimerPause = () => {
    setPauseVideo(true);
  };

  const handleTimerResume = () => {
    setPauseVideo(false);
  };

  const helpText = "Please input a time between 1 and 120 minutes";

  return (
    <div className={"home-two-container"}>
      <img
        style={{ width: "50%", height: "undefined", justifyContent: "center" }}
        src="https://upload.wikimedia.org/wikipedia/commons/3/38/Game_Grumps_logo_2018.png"
        alt="Game Grumps Logo"
      ></img>
      <h1>Sleep Timer App</h1>
      <br></br>
      {!showVideoPlayer && (
        <>
          <h3>Enter a time in minutes</h3>
          <div
            className="form-group"
            style={{ margin: "auto", width: "100px" }}
          >
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
      {displayHelpText && <p className="highlight-text">{helpText}</p>}
      <CountdownTimer
        expiryTimestamp={expiryTimestamp}
        startTime={timeInput}
        clearValue={handleClearValue}
        renderVideoPlayer={renderVideoPlayer}
        handleTimerStart={handleTimerStart}
        handleTimerPause={handleTimerPause}
        handleTimerResume={handleTimerResume}
        startText={showVideoPlayer ? "Restart" : "Start"}
      />
      <br />
      {showVideoPlayer && (
        <VideoPlayer autoPlay={autoPlay} pauseVideo={pauseVideo} />
      )}
      {!showVideoPlayer && (
        <div>
          <h4>
            Input a time to begin, then press{" "}
            <span className="highlight-text">Start!</span>
          </h4>
          <h4>
            Press <span className="highlight-text">Clear</span> to reset
          </h4>
        </div>
      )}
    </div>
  );
}
