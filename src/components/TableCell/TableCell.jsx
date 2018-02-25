import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input/Input.jsx';
import styles from './TableCell.scss';

class TableCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'tbd',
      optionPosition: 0,
      readOnly: (this.props.status == 'legend'),
      value: ''
    }

    this.validateInput = this.validateInput.bind(this);
  }

  validateInput(ev) {
    if (isNaN(ev.currentTarget.value)) {
      return;
    }
    this.setState({value: ev.currentTarget.value})
    if (ev.currentTarget.value == this.props.targetValue) {
      this.setState({
        status: 'correct',
        readOnly: true
      });
    } else {
      this.setState({
        status: 'incorrect',
        readOnly: false
      });
    }
  }

  render() {
    return (
      <td className={styles.tableCell}>
        <Input
            type={'text'}
            status={this.state.status}
            onChange={this.validateInput}
            readOnly={this.state.readOnly}
            value={(this.props.status == 'legend') ? this.props.targetValue : this.state.value}
        />
      </td>
    );
  }
}

export { TableCell };
export default TableCell;
