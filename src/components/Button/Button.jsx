import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

class Button extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   timerRunning: this.props.timerRunning
    // }
  }

  // stopTimer() {
  //   if (this.props.status == 'legend') {
  //     return styles.legend;
  //   } else if (this.props.status == 'correct') {
  //     return styles.correct;
  //   } else if (this.props.status == 'incorrect') {
  //     return styles.incorrect;
  //   }
  // }

  render() {
    return(

      <button
          className={classNames(
              styles.button
          )}
          onClick={this.props.onClick}
          type={this.props.type}
      >
        Reset Table  
      </button>

    );
  }
}

export { Button };
export default Button;
