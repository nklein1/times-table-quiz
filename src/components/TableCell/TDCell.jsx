import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';

import styles from './TableCell.module.scss';

class TableCell extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      status: '',
      readOnly: '',
      value: ''
    }
  }

  componentDidMount() {
    this.setState({
      status: (this.props.status === 'legend') ? 'legend' : 'tbd',
      readOnly: (this.props.status === 'legend')
    });
  }

  parseInput = (ev) => {
    if (isNaN(ev.target.value)) {
      return;
    }
    this.setState({value: ev.target.value});
    if (parseInt(ev.target.value) === parseInt(this.props.targetValue)) {
      this.validateInput(ev);
    }
  }

  validateInput = (ev) => {
    if (isNaN(ev.target.value)) {
      return;
    }
    if (this.state.status === 'correct') {
      // Don't mark as correct more than once
      return true;
    } else if (this.state.status !== 'correct' && parseInt(ev.target.value) === parseInt(this.props.targetValue)) {
      // Mark as correct
      this.setState({ status: 'correct', readOnly: true });
      this.props.correctInput();
    } else if (ev.target.value !== '') {
      // Mark as incorrect
      this.setState({ status: 'incorrect', readOnly: false });
      this.props.incorrectInput();
    } else {
      // Mark as empty
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
