import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';
import Nav from './nav';

const Layout = ({ children }) => (
  <div>
    <Nav/>
    { children }
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/*
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render = { data => (
      <div>
        <Helmet title={ data.site.siteMetadata.title } meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}>
          <html lang="en" />
        </Helmet>
        <div>
          {children}
        </div>
      </div>
    )}
  />
)*/