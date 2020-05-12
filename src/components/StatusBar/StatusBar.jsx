import React from 'react';
import classNames from 'classnames';

import Button from '../Button/Button.jsx';
import Timer from '../Timer/Timer.jsx';
import styles from './StatusBar.module.scss';

const StatusBar = React.memo(function StatusBar(props) {
  return(
    <div className={styles.container}>
      <Timer  
          isComplete={props.isComplete}
          isRunning={props.isRunning}
          minutes={props.minutes}
          seconds={props.seconds}/>
      <div className={styles.rightContainer}>
        <form className={styles.inputContainer}>
          <label htmlFor={'tableSize'} className={styles.label}>Table Size:</label>
          <input
              id={'tableSize'}
              name={'tableSize'}
              type={'number'}
              max={100}
              min={2}
              className={classNames(
                  styles.input,
                  props.isRunning === true ? styles.disabled : ''
              )}
              defaultValue={props.tableSize}
              onChange={props.resizeTable}
              readOnly={props.isRunning}
          />
        </form>
        <Button
            isRunning={props.isRunning}
            isComplete={props.isComplete}
            resetTable={props.resetTable}>
          Reset Table
        </Button>
      </div>
    </div>
  );
});

export { StatusBar };
export default StatusBar;
