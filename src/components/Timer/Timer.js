import React, { useEffect, useContext } from 'react';
import classNames from 'classnames';

import TimerContext from '../../utils/TimerContext';
import { getRandomString } from '../../utils/utils';
import styles from './Timer.module.scss';

const Timer = React.memo(function Timer(props) {
  const timer = useContext(TimerContext)

  const [hours, setHours] = React.useState('00');
  const [minutes, setMinutes] = React.useState('00');
  const [seconds, setSeconds] = React.useState('00');
  const [initialTime, setInitialTime] = React.useState('');
  const [intervalId, setIntervalId] = React.useState(null);

  // Clear timer when table is reset
  useEffect(() => {
    if (timer.isReset === true) {
      setHours('00');
      setMinutes('00');
      setSeconds('00');
      setInitialTime('');
      setIntervalId(null);
    }
  }, [timer.isReset]);

  // Initialize/Stop timer when 'isRunning' boolean is toggled
  useEffect(() => {
    if (timer.isRunning) {
      // Initialize Timer
      setInitialTime(Date.now());
    } else {
      // Stop Timer
      clearInterval(intervalId);
      timer.setIfRunning(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [timer.isRunning]);

  // Callback to start timer when initialTime is set in state
  useEffect(() => {
    if (initialTime) {
      // Start Timer
      const interval = setInterval(runTimer, 1000);
      setIntervalId(interval);
      timer.setIfRunning(true);
    }
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTime]);

  const formatTT = (time) => {
    if (parseInt(time) < 10) {
      time = '0' + time;
    }
    return time;
  }

  const runTimer = () => {
    let timeDifference = Date.now() - initialTime;
    let totalSeconds = Math.floor(timeDifference / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - minutes * 60;
    if (hours >= 1) {
      setHours(formatTT(hours));
    }
    setMinutes(formatTT(minutes));
    setSeconds(formatTT(seconds));
  }

  return (
    <span className={styles.container}>
      Timer:
      <span className={classNames(
          styles.timer,
          timer.isComplete ? styles.isComplete : '',
          timer.isRunning ? styles.isRunning : '',
        )}>
        { hours > 0 ? hours + ':' : '' }{ minutes }:{ seconds }
      </span>
    </span>
  );
});

export { Timer };
export default Timer;
