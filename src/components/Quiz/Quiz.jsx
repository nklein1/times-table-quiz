import React from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';

import { StopwatchContext } from '../../utils/stopwatch-context.jsx';

import Table from '../Table/Table.jsx';
import StatusBar from '../StatusBar/StatusBar.jsx';
import styles from './Quiz.scss';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        tableSize: 4,
        totalCells: 9,
        finishedCells: 0,
        seconds: '00',
        minutes: '0',
        hours: '',
        isRunning: false,
        isComplete: false,
        initTimer: this.initTimer,
        startTimer: this.startTimer,
        stopTimer: this.stopTimer,
        resetTable: this.resetTable,
        resizeTable: this.resizeTable,
        completeTable: this.completeTable,
        correctInput: this.correctInput,
        incorrectInput: this.incorrectInput,
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.intervalId);
  }

  componentWillMount() {
    this.setState({totalCells: this.state.tableSize*this.state.tableSize-((this.state.tableSize*2)-1)})
    clearTimeout(this.state.intervalId);
  }

  initTimer = () => {
    this.setState(
      { initialTime: Date.now() }, 
      this.startTimer
    );
  }

  formatTT = (time) => {
    if (parseInt(time) < 10) {
      time = '0' + time;
    }
    return time;
  }

  runTimer = () => {
    let timeDifference = Date.now() - this.state.initialTime;
    let totalSeconds = Math.floor(timeDifference / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - minutes * 60;
    this.setState({
      minutes: minutes,
      seconds: this.formatTT(seconds)
    })
  }

  startTimer = () => {
    const intervalId = setInterval(this.runTimer, 1000);
    this.setState({
      isRunning: true,
      intervalId: intervalId 
    });
  }

  stopTimer = () => {
    clearTimeout(this.state.intervalId);
    this.setState({ isRunning: false });
  }

  completeTable = () => {
    this.stopTimer();
    this.setState({ isComplete: true });
  }

  resetTable = () => {
    this.stopTimer();
    this.setState({ 
      seconds: '00',
      minutes: '0',
      hours: '0',
    });
    window.location.reload();
    // TODO: Implement resetting table cells
  }

  resizeTable = (ev) => {
    if (ev && ev.target.value) {
      let tableSize = parseInt(ev.target.value);
      let totalCells = tableSize * tableSize - ((tableSize * 2) - 1);
      this.setState({
        tableSize: tableSize,
        totalCells: totalCells
      });
    }
  }

  correctInput = () => {
    this.setState(
      { finishedCells: this.state.finishedCells + 1 },
      () => this.anyInput()
    );
  }

  anyInput = () => {
    if (!this.state.isRunning) {
      this.initTimer();
    } else if (parseInt(this.state.finishedCells) === parseInt(this.state.totalCells)) {
      this.completeTable();
    }
  }

  incorrectInput = () => {
    this.anyInput();
  }

  render() {
    return (
      <StopwatchContext.Provider value={this.state}>
        <div className={styles.container}>
          <StatusBar className={styles.statusbar} />
          <Table 
              className={styles.table}
              tableSize={this.state.tableSize}
              tableComplete={this.state.isComplete}
          />
        </div>
      </StopwatchContext.Provider>
    );
  }
}

export { Quiz };
export default Quiz;
