import React, {useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";
import VideoPlayer from "./VideoPlayer";


export default function HomeTwo() {
    const [timeInput, setTimeInput] = useState(null);
    const [expiryTimestamp, setExpiryTimeStamp] = useState(null);
    const [showVideoPlayer, setShowVideoPlayer] = useState(true);
    const [autoPlay, setAutoPlay] = useState(false)

    const handleTimerInput = (e) =>  {
        setTimeInput(e.target.value)
        let time = new Date();
        time.setSeconds(time.getSeconds() + e.target.value * 60)
        setExpiryTimeStamp(time);
    }

    const handleClearValue = () => {
        setTimeInput(0);
        setAutoPlay(false);
        setShowVideoPlayer(true);
    }

    const renderVideoPlayer = () => {
        setShowVideoPlayer(false);
    }

    const handleTimerStart = () => {
        setAutoPlay(true);
    }

    return (
        <div style={{ textAlign: 'center' }}>
          <h1>Sleep Grumps App</h1>
              <input
                  value={timeInput}
                  onChange={handleTimerInput}
                  type="number"
                  max="120"
                  min="1"
              />
              <CountdownTimer 
                    expiryTimestamp={expiryTimestamp} 
                    startTime={timeInput} 
                    clearValue={handleClearValue} 
                    renderVideoPlayer={renderVideoPlayer} 
                    handleTimerStart={handleTimerStart}
                    />
              <br />
          {showVideoPlayer && <VideoPlayer autoPlay={autoPlay}/>}
          { !showVideoPlayer && (
              <div>
                  Thanks For Watching! Press the Clear button to reset
                </div>
          )}
        </div>
      );
}