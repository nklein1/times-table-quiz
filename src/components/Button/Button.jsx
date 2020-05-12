import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { StopwatchContext } from '../../utils/stopwatch-context.jsx';
import styles from './Button.module.scss';

function Button({ children, onClick }) {
  return(
    <StopwatchContext.Consumer>
      {({isRunning, isComplete, resetTable}) => (
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
      )}
    </StopwatchContext.Consumer>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

export { Button };
export default Button;
