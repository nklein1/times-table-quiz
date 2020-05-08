import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Table from '../Table/Table.jsx';
import StatusBar from '../StatusBar/StatusBar.jsx';
import styles from './Quiz.scss';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        tableSize: 3,
        timerRunning: false,
        tableComplete: false
    }
  }

  // resetTable() {
    // TODO
  // }

  startTimer = () => {
    this.setState({ timerRunning: true });
  }

  stopTimer = () => {
    this.setState({ timerRunning: false });
  }

  render() {
    return (
      <div className={styles.container}>
        <StatusBar 
            className={styles.statusbar}
            timerRunning={this.state.timerRunning}
        />
        <Table 
            className={styles.table}
            tableSize={this.state.tableSize}
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
            timerRunning={this.state.timerRunning}
            tableComplete={this.state.tableComplete}
        />
      </div>
    );
  }
}

export { Quiz };
export default Quiz;
