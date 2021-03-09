import React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from '../styles/components'
import './layout.css'

import Header from "./header"

const Layout = ({ children }) => (
  
      <>
        <Header  />
        <Content
          
        >
          <main>{children}</main>
          {/* <Footer>
            © {new Date().getFullYear()}| made with dedication by         
            <a href="https://omar-leal.github.io/">Omar Leal</a>
          </Footer> */}
        </Content>
      </>
    
  
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
