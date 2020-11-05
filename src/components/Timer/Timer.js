import React from 'react';
import classNames from 'classnames';

import styles from './Timer.module.scss';

const Timer = React.memo(function Timer({ minutes, seconds, isRunning, isComplete }) {
  return (
    <span className={styles.container}>
      Timer:
      <span className={classNames(
          styles.timer,
          isComplete ? styles.isComplete : '',
          isRunning ? styles.isRunning : '',
        )}>
        { minutes }:{ seconds }
      </span>
    </span>
  );
});

export { Timer };
export default Timer;
