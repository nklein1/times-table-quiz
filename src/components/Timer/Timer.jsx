import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Timer.module.scss';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: '',
      initialTime: 0,
      seconds: '00',
      minutes: '00'
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.timerRunning === true) {
      this.initTimer();
    } if (nextProps.timerRunning === false) {
      this.stopTimer();
    }
  }

  initTimer = () => {
    this.setState(
      { initialTime: Date.now() }, 
      this.startTimer
    );
  }

  startTimer = () => {
    const intervalId = setInterval(this.runTimer, 1000);
    this.setState({ intervalId: intervalId });
  }

  stopTimer = () => {
    clearTimeout(this.state.intervalId);
  }

  formatTime = (time) => {
    if (time < 10) {
      return '0'+time;
    } else {
      return time;
    }
  }

  runTimer = () => {
    let timeDifference = Date.now() - this.state.initialTime;
    let totalSeconds = Math.floor(timeDifference/1000);
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds - minutes * 60;
    this.setState({
      minutes: this.formatTime(minutes),
      seconds: this.formatTime(seconds)
    })
  }

  componentWillUnmount() {
    clearTimeout(this.state.intervalId);
  }

  render() {
    return (
      <span>
        { this.state.minutes }:{ this.state.seconds }
      </span>
    );
  }
}

export { Timer };
export default Timer;
