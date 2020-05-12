import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = ({ siteTitle, pathname }, props) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <span>{ siteTitle }</span>
      </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: 'Times Table Quiz',
}

export default Header;
