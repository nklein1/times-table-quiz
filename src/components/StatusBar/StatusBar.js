import React, { useContext } from 'react';
import classNames from 'classnames';

import { Drawer,
          Button,
          Divider,
          TextField,
          IconButton } from '@material-ui/core';

import { Settings,
          ChevronLeft } from '@material-ui/icons';

import TimerContext from '../../utils/TimerContext';
import Timer from '../Timer/Timer.js';
import styles from './StatusBar.module.scss';

const StatusBar = React.memo(function StatusBar(props) {
  const timer = useContext(TimerContext)

  const maxSize = 25;
  const [tableSize, setTableSize] = React.useState(props.tableSize);
  const [isDrawerOpen, setDrawer] = React.useState(false);
  const [isError, setError] = React.useState(false);
 
  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawer(isOpen);
  };

  const validateInput = (ev) => {
    // ev.preventDefault();
    if (ev.target.value <= maxSize) {
      setTableSize(ev.target.value);
      setError(false);
      props.resizeTable(ev);
    } else {
      setError(true);
    }
  };

  const tableSettings = () => {
    return (
    <>
      <div className={classNames(styles.wrapfoo)}>
          <TextField
            id={'tableSizeId'}
            name={'tableSize'}
            type={'number'}
            inputProps={{ 'min':2, 'max': maxSize }}
            size={'small'}
            label={'Table Size'}
            title={'Maximum table size is ' + maxSize + 'x' + maxSize}
            classes={{root: styles.input}}
            variant={'outlined'}
            value={tableSize}
            onChange={validateInput}
            readOnly={timer.isRunning}
          />
        <div className={classNames(
            styles.alert,
            !isError ? styles.hidden : ''
          )}>
          Maximum table size is {maxSize}x{maxSize}. Please choose a smaller size.
        </div>
      </div>
      <div className={styles.spacer} />
      <Button disableElevation
          className={classNames(
              styles.button,
              timer.isComplete ? styles.isComplete : '',
              timer.isRunning ? styles.isRunning : '',
          )}
          color={'primary'}
          variant={'contained'}
          disabled={(timer.isRunning === true || timer.isComplete === true) ? false : true}
          onClick={props.resetTable}>
        Reset Table
      </Button>
    </>
    );
  };

  return(
    <div className={styles.container}>
      <Timer />
      <div className={classNames(
          styles.rightContainer,
          styles.mobile
      )}>
        <Button
            disableElevation
            onClick={toggleDrawer(true)}
            variant={'contained'}>
          <Settings />
        </Button>
        <Drawer
            anchor={'right'}
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}>
          <div className={styles.drawerContainer}>
            <div className={styles.drawerHeader}>
              <IconButton onClick={toggleDrawer(false)}>
                <ChevronLeft />
              </IconButton>
              Settings
            </div>
            <Divider />
            <div className={styles.drawerContents}>
              <div className={styles.spacer} />
              { tableSettings() }
            </div>
          </div> 
        </Drawer>
      </div>

      <div className={classNames(styles.rightContainer, styles.desktop)}>
        { tableSettings() }
      </div>
    </div>
  );
});

export { StatusBar };
export default StatusBar;
