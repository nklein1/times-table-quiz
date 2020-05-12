import React from 'react';
import classNames from 'classnames';

import { StopwatchContext } from '../../utils/stopwatch-context.jsx';

import Button from '../Button/Button.jsx';
import Timer from '../Timer/Timer.jsx';
import styles from './StatusBar.module.scss';

const StatusBar = () => {
  return(
    <StopwatchContext.Consumer>
      {({tableSize, resizeTable, isRunning}) => (
        <div className={styles.container}>
          <Timer />
          <div className={styles.rightContainer}>
            <form className={styles.inputContainer}>
              <label htmlFor={'tableSize'} className={styles.label}>Table Size:</label>
              <input
                  id={'tableSize'}
                  name={'tableSize'}
                  type={'number'}
                  min={2}
                  max={100}
                  className={classNames(
                      styles.input,
                      isRunning === true ? styles.disabled : ''
                  )}
                  defaultValue={tableSize}
                  onChange={resizeTable}
                  readOnly={isRunning}
              />
            </form>
            <Button>Reset Table</Button>
          </div>
        </div>
      )}
    </StopwatchContext.Consumer>
  );
}

export { StatusBar };
export default StatusBar;
