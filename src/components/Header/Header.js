import React from 'react';
// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { globalHistory } from '@reach/router'

import styles from './Header.module.scss';

const Header = ({ siteTitle, pathname }, props) => {
  return (
    <div className={styles.appbar}>
      <span>{ siteTitle }</span>
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
