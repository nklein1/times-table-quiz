import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import TableCell from 'components/TableCell/TableCell.jsx';

import styles from './Table.scss';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCells: this.props.tableSize*this.props.tableSize-(this.props.tableSize*2)-1,
      finishedCells: 0
    }

    console.log('this.state.totalCells');
    console.log(this.state.totalCells);
  }

  _successCallback() {
    this.setState({finishedCells: finishedCells++});
  }

  _generateTableRow(row, tableSize, numCells) {
    // let numCells = this.state.totalCells;
    var cells = [];
    for (let column = 1; column < tableSize+1; column++) {
      if (column == 1 || row == 1) {
        // TODO: Keys need to be unique
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
              success={this._successCallback}
          />
        );
      }
    }
    return cells;
  }

  _generateTable(tableSize) {
    let numCells = this.state.totalCells;
    var rows = [];
    for (let i = 1; i < tableSize+1; i++) {
      rows.push(
        <tr className={styles.row}>
        {this._generateTableRow(i, tableSize, numCells)}
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

export { Table };
export default Table;
