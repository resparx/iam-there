/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import { HeartTwoTone } from '@ant-design/icons';

import Header from "./header"
import "./layout.css"


const Footer = styled.footer`
position: absolute;
bottom: 12px;
text-align: center;
width: 100%;

`

const Layout = ({ children }) => {
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
        <main>{children}</main>
        <Footer>
          made with <HeartTwoTone twoToneColor="#eb2f96" /> by Rammmmmm....!
        </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
