import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  checkStatusStyle() {
    if (this.props.status == 'legend') {
      return styles.legend;
    } else if (this.props.status == 'correct') {
      return styles.correct;
    } else if (this.props.status == 'incorrect') {
      return styles.incorrect;
    }
  }

  render() {
    return(
      <span className={styles.container}>
        <input
            type={this.props.type}
            className={classNames(
                styles.input,
                this.checkStatusStyle()
            )}
            value={this.props.value}
            onChange={this.props.onChange}
            readOnly={this.props.readOnly}
            ref={node => this.input = node}
        />
      </span>
    );
  }
}

export { Input };
export default Input;
