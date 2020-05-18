import React from 'react';
import classNames from 'classnames';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Timer from '../Timer/Timer.jsx';
import styles from './StatusBar.module.scss';

const StatusBar = React.memo(function StatusBar(props) {

  const [state, setState] = React.useState({
    isDrawerOpen: false
  });

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ 'isDrawerOpen': isOpen });
  };

  const tableSettings = () => (
    <>
    <TextField
      id={'tableSize'}
      name={'tableSize'}
      label={'Table Size'}
      type={'number'}
      max={100}
      min={2}
      size={'small'}
      variant={'outlined'}
      classes={{root: styles.input}}
      defaultValue={props.tableSize}
      onChange={props.resizeTable}
      readOnly={props.isRunning}
    />
    <div className={styles.spacer} />
    <Button disableElevation
        className={classNames(
            styles.button,
            props.isComplete ? styles.isComplete : '',
            props.isRunning ? styles.isRunning : '',
        )}
        color={'primary'}
        variant={'contained'}
        disabled={(props.isRunning === true || props.isComplete === true) ? false : true}
        onClick={props.resetTable}>
      Reset Table
    </Button>
    </>
  );

  return(
    <div className={styles.container}>
      <Timer  
          isComplete={props.isComplete}
          isRunning={props.isRunning}
          minutes={props.minutes}
          seconds={props.seconds}/>
      <div className={classNames(
          styles.rightContainer,
          styles.mobile
      )}>
        <Button
            disableElevation
            onClick={toggleDrawer(true)}
            variant={'contained'}>
          <SettingsIcon />
        </Button>
        <Drawer
            anchor={'right'}
            open={state['isDrawerOpen']}
            onClose={toggleDrawer(false)}>
          <div className={styles.drawerContainer}>
            <div className={styles.drawerHeader}>
              <IconButton onClick={toggleDrawer(false)}>
                <ChevronLeftIcon />
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
