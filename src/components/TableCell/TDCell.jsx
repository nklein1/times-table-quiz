import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';

import styles from './TableCell.module.scss';

class TableCell extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      status: (this.props.status === 'legend') ? 'legend' : 'tbd',
      readOnly: (this.props.status === 'legend'),
      value: ''
    }
  }

  parseInput = (ev) => {
    if (isNaN(ev.target.value)) {
      return;
    }
    this.setState({value: ev.target.value});
    if (parseInt(ev.target.value) === parseInt(this.props.targetValue)) {
      this.setState({ status: 'correct', readOnly: true });
      this.props.correctInput();
    }
  }

  validateInput = (ev) => {
    if (isNaN(ev.target.value)) {
      return;
    }
    if (parseInt(ev.target.value) === parseInt(this.props.targetValue)) {
      this.setState({ status: 'correct', readOnly: true });
      this.props.correctInput();
    } else if (ev.target.value !== '') {
      this.setState({ status: 'incorrect', readOnly: false });
      this.props.incorrectInput();
    } else {
      this.setState({ status: 'tbd', readOnly: false });
    }
  }

  render() {
    return (
      <td className={styles.tableCell}>
        <input
            className={classNames(
                styles.input,
                this.state.status ? styles[this.state.status] : '',
            )}
            type={'text'}
            value={this.state.value}
            onChange={this.parseInput}
            onBlur={this.validateInput}
            readOnly={this.state.readOnly}
        />
      </td>
    );
  }
}

export { TableCell };
export default TableCell;
