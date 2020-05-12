import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './TableCell.module.scss';

const THCell = React.memo(function THCell({targetValue, status, type}) {
  return (
    <th className={styles.tableCell}>
      <input
          type={'text'}
          className={classNames(
              styles.input,
              status ? styles[status] : '',
              type === 'legendRow' ? styles['legendRow'] : ''
          )}
          value={targetValue}
          readOnly={true}
      />
    </th>
  );
});

THCell.propTypes = {
  targetValue: PropTypes.number,
  status: PropTypes.string,
  type: PropTypes.string
}

export { THCell };
export default THCell;
