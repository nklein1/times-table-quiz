import React from 'react';
// import PropTypes from 'prop-types';

import { StopwatchContext } from '../../utils/stopwatch-context.jsx';
import TableCell from '../TableCell/TableCell.jsx';
import styles from './Table.module.scss';

class Table extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   totalCells: this.props.tableSize*this.props.tableSize-((this.props.tableSize*2)-1),
    //   finishedCells: 0
    // }
  }

  // anyInput = () => {
  //   let stopwatch = this.context;
  //   if (!stopwatch.isRunning) {
  //     stopwatch.initTimer();
  //   // } else if (parseInt(this.state.finishedCells) === parseInt(this.state.totalCells)) {
  //   } else if (parseInt(stopwatch.finishedCells) === parseInt(stopwatch.totalCells)) {
  //     stopwatch.completeTable();
  //   }
  // }

  // correctInput = () => {
  //   this.setState(
  //     // { finishedCells: this.state.finishedCells+1 },
  //     { finishedCells: stopwatch.finishedCells + 1 },
  //     () => this.anyInput()
  //   );
  // }

  // incorrectInput = () => {
  //   this.anyInput();
  // }

  _generateTableRow = (row, tableSize, numCells) => {

    let stopwatch = this.context;

    let cells = [];
    for (let column = 1; column < tableSize+1; column++) {
      if (column === 1 || row === 1) {
        cells.push(
          <TableCell 
              targetValue={row*column}
              status={'legend'}
              key={numCells--}
          />
        );
      } else {
        cells.push(
          <TableCell 
              correct={false}
              targetValue={row*column}
              status={'tbd'}
              key={numCells--}
              correctInput={stopwatch.correctInput}
              incorrectInput={stopwatch.incorrectInput}
          />
        );
      }
    }
    return cells;
  }

  _generateTable = (tableSize) => {
    let stopwatch = this.context;
    
    // let numCells = this.state.totalCells;
    let numCells = stopwatch.totalCells;
    let rows = [];
    for (let i = 1; i < tableSize+1; i++) {
      rows.push(
        <tr className={styles.row} key={'tr-'+i}>
        { this._generateTableRow(i, tableSize, numCells*i) }
        </tr>
      );
    }
    return rows;
  }

  render() {
    return (
      <table>
        <tbody>
          { this._generateTable(this.props.tableSize) }
        </tbody>
      </table>
    );
  }
}

Table.contextType = StopwatchContext;

export { Table };
export default Table;
