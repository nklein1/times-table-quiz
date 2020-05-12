import React from 'react';
import classNames from 'classnames';

import { StopwatchContext } from '../../utils/stopwatch-context.jsx';
import styles from './Timer.module.scss';

const Timer = () => {
  return (
    <StopwatchContext.Consumer>
      {({minutes, seconds, isRunning, isComplete}) => (
        <span className={classNames(
            styles.timer,
            isComplete ? styles.isComplete : '',
            isRunning ? styles.isRunning : '',
          )}>
          { minutes }:{ seconds }
        </span>
      )}
    </StopwatchContext.Consumer>
  );
}

export { Timer };
export default Timer;
