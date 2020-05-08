import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './TableCell.module.scss';

class TableCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: (this.props.status === 'legend') ? 'legend' : 'tbd',
      readOnly: (this.props.status === 'legend'),
      optionPosition: 0,
      value: ''
    }
  }

  validateInput = (ev) => {
    if (isNaN(ev.currentTarget.value)) {
      return;
    }
    this.setState({value: ev.currentTarget.value})
    if (parseInt(ev.currentTarget.value) === parseInt(this.props.targetValue)) {
      this.setState({
        status: 'correct',
        readOnly: true
      });
      this.props.correctInput();
    } else {
      this.setState({
        status: 'incorrect',
        readOnly: false
      });
      this.props.incorrectInput();
    }
  }

  render() {
    return (
      <td className={styles.tableCell}>
        <input
            type={'text'}
            className={classNames(
                styles.input,
                this.state.status ? styles[this.state.status] : ''
            )}
            value={(this.props.status === 'legend') ? this.props.targetValue : this.state.value}
            onChange={this.validateInput}
            readOnly={this.state.readOnly}
        />
      </td>
    );
  }
}

export { TableCell };
export default TableCell;
