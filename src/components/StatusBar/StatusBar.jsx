import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button/Button.jsx';
import Timer from '../Timer/Timer.jsx';
import styles from './StatusBar.module.scss';

class StatusBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timerRunning: this.props.timerRunning
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.timerRunning == true) {
  //     this.initTimer();
  //   } if (nextProps.timerRunning == false) {
  //     stopTimer(this.state.intervalId);
  //   }
  // }

  stopTimer = () => {

  }

  render() {
    return(
      <div className={styles.container}>
        <Timer timerRunning={this.props.timerRunning}></Timer>
        <div>
        <Button onClick={this.stopTimer}></Button>
        </div>
      </div>
    );
  }
}

export { StatusBar };
export default StatusBar;
