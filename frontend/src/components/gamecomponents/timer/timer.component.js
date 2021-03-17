import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
import "./timer.css";
import useTimer from './timer.hooks';
import { formatTime } from './utils';

const Timer = (props) => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, getTime } = useTimer(0);
  const [start, setStart] = useState(false)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    setStart(props.start)
    setComplete(props.complete)
  }, [props.start, props.complete])

  useEffect(() => {
    handleStart();
  }, [start]);

  useEffect(() => {
    handlePause();
    getTime(props.onTimeComplete);
  }, [complete]);

  return (
    <div className="app">
      {/* <h3>React Stopwatch {element}</h3> */}
      <div className='stopwatch-card'>
        <p>{formatTime(timer)}</p>
        {/* <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div> */}
      </div>
    </div>
  );
}

export default Timer;