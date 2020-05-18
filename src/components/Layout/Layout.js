import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header/Header';
import styles from  './Layout.module.scss';

const Layout = ({ children, title, pathname }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={styles.outer}>
        <main className={styles.inner}>{children}</main>
        <footer className={styles.footer}>
          © {new Date().getFullYear()} <a href={'http://nklein.info'} target={'_blank'}>Nick Klein</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
