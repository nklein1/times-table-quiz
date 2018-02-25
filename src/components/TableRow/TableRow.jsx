import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import TableCell from 'components/TableCell/TableCell.jsx';

import styles from './TableRow.scss';

class TableRow extends React.Component {
  // static propTypes = {
  //     // className: PropTypes.string,
  //     // href: PropTypes.string.isRequired,
  //     // queries: PropTypes.object
  // }

  // static defaultProps = {
  //     // className: ``,
  //     // queries: {}
  // }

  render() {
    return (
      <div className={styles.row}>
        <TableCell tempValue={2} />
      </div>
    );
  }
}

export { TableRow };
export default TableRow;
