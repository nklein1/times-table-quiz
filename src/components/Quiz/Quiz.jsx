import React from 'react';

import Table from '../Table/Table.js';
import StatusBar from '../StatusBar/StatusBar.js';
import TimerContext from '../../utils/TimerContext';
import styles from './Quiz.module.scss';

class Quiz extends React.PureComponent {
  static contextType = TimerContext;

  constructor(props) {
    super(props);

    this.state = {
      tableSize: 12,
      totalCells: 121,
      finishedCells: 0
    }
  }

  componentDidMount() {
    this.setState({
      totalCells: this.state.tableSize*this.state.tableSize-((this.state.tableSize*2)-1)
    })
  }

  // Mark Table as Completed in UI
  completeTable = () => {
    this.context.setIfRunning(false);
    this.context.setIfComplete(true);
  }

  // Mark Table as Reset in UI
  resetTable = () => {
    this.context.setIfRunning(false);
    this.context.setIfComplete(false);
    this.context.setIfReset(true);
    this.setState({ finishedCells: 0 });
  }

  // Resize table based on user input
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

  // Callback for correctly-input value
  correctInput = () => {
    this.setState(
      { finishedCells: this.state.finishedCells + 1 },
      () => this.anyInput()
    );
  }

  // Callback for incorrectly-input value
  incorrectInput = () => {
    this.anyInput();
  }

  // Callback for all input values
  anyInput = () => {
    if (!this.context.isRunning) {
      this.context.setIfRunning(true);
    }
    if (parseInt(this.state.finishedCells) === parseInt(this.state.totalCells)) {
      this.completeTable();
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <StatusBar 
            className={styles.statusbar}
            tableSize={this.state.tableSize}
            resizeTable={this.resizeTable}
            resetTable={this.resetTable}
         />
        <div className={styles.table}>
          <Table 
              tableComplete={this.context.isComplete}
              totalCells={this.state.totalCells}
              tableSize={this.state.tableSize}
              correctInput={this.correctInput}
              incorrectInput={this.incorrectInput}
              key={'timesTableKey'}
          />
        </div>
      </div>
    );
  }
}

export { Quiz };
export default Quiz;
