import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = React.memo(function Button({ children, isRunning, isComplete, resetTable }) {
  return(
    <button
        className={classNames(
            styles.button,
            isComplete ? styles.isComplete : '',
            isRunning ? styles.isRunning : '',
        )}
        onClick={resetTable}
        disabled={(isRunning === true || isComplete === true) ? false: true}
    >
      { children }  
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  isRunning: PropTypes.bool,
  isComplete: PropTypes.bool,
  resetTable: PropTypes.func
}

export { Button };
export default Button;
