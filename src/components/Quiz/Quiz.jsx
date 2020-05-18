import React from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';

import Table from '../Table/Table.jsx';
import StatusBar from '../StatusBar/StatusBar.jsx';
import { getRandomString } from '../../utils/utils.js';
import styles from './Quiz.module.scss';

class Quiz extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tableSize: 12,
      totalCells: 121,
      finishedCells: 0,
      seconds: '00',
      minutes: '0',
      hours: '',
      isRunning: false,
      isComplete: false,
      tableKey: 'table-' + getRandomString()
    }
  }

  componentDidMount() {
    this.setState({totalCells: this.state.tableSize*this.state.tableSize-((this.state.tableSize*2)-1)})
    clearTimeout(this.state.intervalId);
  }

  componentWillUnmount() {
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
      tableKey: 'table-' + getRandomString()
      // Change the Table component key to force state refresh of Table and cell components 
    });
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
      <div className={styles.container}>
        <StatusBar 
            className={styles.statusbar}
            isComplete={this.state.isComplete}
            isRunning={this.state.isRunning}
            tableSize={this.state.tableSize}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            resizeTable={this.resizeTable}
            resetTable={this.resetTable}
         />
        <div className={styles.table}>
          <Table 
              tableComplete={this.state.isComplete}
              totalCells={this.state.totalCells}
              tableSize={this.state.tableSize}
              correctInput={this.correctInput}
              incorrectInput={this.incorrectInput}
              key={'table-' + this.state.tableKey}
          />
        </div>
      </div>
    );
  }
}

export { Quiz };
export default Quiz;
