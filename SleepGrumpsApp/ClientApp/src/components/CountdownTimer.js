import React from 'react';
import { useTimer } from 'react-timer-hook';

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
    } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => props.renderVideoPlayer() });


    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '100px' }}>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
            { 
            // <button onClick={start}>Start</button> 
            }
            <button className="btn btn-primary" onClick={() => {
                const time = new Date();
                time.setSeconds(time.getSeconds() + (props.startTime * 60));
                props.handleTimerStart();
                restart(time)
            }}>Start</button>
            <button className="btn btn-primary"  onClick={pause}>Pause</button>
            <button className="btn btn-primary"  onClick={resume}>Resume</button>
            <button className="btn btn-primary"  onClick={props.clearValue}>Clear</button>
        </div>
    );
}