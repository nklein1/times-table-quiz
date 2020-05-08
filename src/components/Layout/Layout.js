/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
      <div className={styles.header}>
        {data.site.siteMetadata.title}
      </div>
      <div className={styles.container}>
        <main>{children}</main>
        <footer className={styles.footer}>
          © {new Date().getFullYear()} Nick Klein. Built with&nbsp;
          <a href="https://www.gatsbyjs.org" rel={'noopener noreferrer nofollow'} target={'_blank'}>Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
