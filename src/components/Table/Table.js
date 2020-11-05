import React from 'react';

import THCell from '../TableCell/THCell.js';
import TDCell from '../TableCell/TDCell.js';
import styles from './Table.module.scss';

class Table extends React.PureComponent {

  _generateTableRow = (row, tableSize, cellCountForKey) => {
    let cells = [];
    for (let column = 1; column < tableSize + 1; column++) {
      if (column === 1 || row === 1) {
        cells.push(
          <THCell 
              targetValue={row * column}
              status={'legend'}
              type={(column === 1) ? 'legendRow' : 'legendCol'}
              key={'THCell-' + cellCountForKey--}
          />
        );
      } else {
        cells.push(
          <TDCell 
              correct={false}
              status={'tbd'}
              targetValue={row * column}
              correctInput={this.props.correctInput}
              incorrectInput={this.props.incorrectInput}
              key={'TDCell-' + cellCountForKey--}
          />
        );
      }
    }
    return cells;
  }

  _generateTable = (tableSize) => {
    let totalCells = this.props.totalCells;
    let rows = [];
    for (let i = 1; i < tableSize + 1; i++) {
      rows.push(
        <tr className={styles.row} key={'tr-' + i}>
          { this._generateTableRow(i, tableSize, totalCells * i) }
        </tr>
      );
    }
    return rows;
  }

  render() {
    return (
      <table
          cellSpacing={'0'}
          cellPadding={'0'}
          className={styles.table}>
        <tbody>
          { this._generateTable(this.props.tableSize) }
        </tbody>
      </table>
    );
  }
}

export { Table };
export default Table;
